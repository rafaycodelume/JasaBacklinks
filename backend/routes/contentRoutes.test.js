const request = require("supertest");
const express = require("express");

jest.mock("../models/Blog", () => ({
  find: jest.fn(),
  findOne: jest.fn(),
  findOneAndUpdate: jest.fn(),
  findOneAndDelete: jest.fn(),
}));
jest.mock("../models/Category", () => ({
  find: jest.fn(),
  create: jest.fn(),
  countDocuments: jest.fn(),
  findOneAndDelete: jest.fn(),
}));
jest.mock("../models/Media", () => ({
  find: jest.fn(),
  create: jest.fn(),
  findOneAndDelete: jest.fn(),
}));

const Blog = require("../models/Blog");
const Category = require("../models/Category");
const Media = require("../models/Media");
const adminRoutes = require("./cmsRoutes");
const contentRoutes = require("./contentRoutes");

const app = express();
app.use(express.json({ limit: "15mb" }));
app.use("/api/admin", adminRoutes);
app.use("/api", contentRoutes);

describe("admin blogging API flow", () => {
  let token;
  let blogs;
  let categories;
  let media;

  beforeAll(async () => {
    process.env.ADMIN_PASSWORD = "local-test-password";
    process.env.ADMIN_JWT_SECRET = "local-test-jwt-secret-with-sufficient-entropy";
    const response = await request(app)
      .post("/api/admin/login")
      .send({ password: process.env.ADMIN_PASSWORD });
    token = response.body.token;
  });

  beforeEach(() => {
    blogs = [
      { id: "blog-pub", slug: "published", status: "published" },
      { id: "blog-draft", slug: "draft", status: "draft" },
    ];
    categories = [{ id: "cat-a", name: "Test category", color: "blue" }];
    media = [{ id: "media-a", name: "Test image", alt: "alt", url: "https://example.com/a.jpg" }];

    Blog.find.mockImplementation((filter = {}) => ({
      sort: () => ({
        lean: async () =>
          blogs.filter(
            (blog) => !filter.status || blog.status === filter.status
          ),
      }),
    }));
    Blog.findOne.mockImplementation((filter) => ({
      lean: async () =>
        blogs.find(
          (blog) =>
            blog.slug === filter.slug &&
            (!filter.status || blog.status === filter.status)
        ) || null,
    }));
    Blog.findOneAndUpdate.mockImplementation((filter, update) => {
      const blog = { ...update.$set, id: filter.id };
      blogs = [...blogs.filter((item) => item.id !== filter.id), blog];
      return { lean: async () => blog };
    });
    Blog.findOneAndDelete.mockImplementation(async (filter) => {
      const deleted = blogs.find((item) => item.id === filter.id) || null;
      blogs = blogs.filter((item) => item.id !== filter.id);
      return deleted;
    });

    Category.find.mockImplementation(() => ({
      sort: () => ({ lean: async () => categories }),
    }));
    Category.create.mockImplementation(async (category) => {
      categories = [...categories, category];
      return category;
    });
    Category.countDocuments.mockImplementation(async () => categories.length);
    Category.findOneAndDelete.mockImplementation(async (filter) => {
      const deleted = categories.find((item) => item.id === filter.id) || null;
      categories = categories.filter((item) => item.id !== filter.id);
      return deleted;
    });

    Media.find.mockImplementation(() => ({
      sort: () => ({ lean: async () => media }),
    }));
    Media.create.mockImplementation(async (item) => {
      media = [item, ...media];
      return item;
    });
    Media.findOneAndDelete.mockImplementation(async (filter) => {
      const deleted = media.find((item) => item.id === filter.id) || null;
      media = media.filter((item) => item.id !== filter.id);
      return deleted;
    });
  });

  it("logs in, protects writes, and serves published blogs publicly", async () => {
    const wrongPassword = await request(app)
      .post("/api/admin/login")
      .send({ password: "wrong" });
    expect(wrongPassword.status).toBe(401);
    expect(wrongPassword.body.error).toBe(
      "Unauthorised access attempt blocked. Verify your ADMIN_PASSWORD."
    );

    expect((await request(app).get("/api/admin/verify")).status).toBe(401);
    expect((await request(app).get("/api/admin/verify").set("Authorization", `Bearer ${token}`)).status).toBe(200);
    expect((await request(app).post("/api/blogs").send({})).status).toBe(401);

    const publicBlogs = await request(app).get("/api/blogs");
    expect(publicBlogs.status).toBe(200);
    expect(publicBlogs.body.map((blog) => blog.slug)).toEqual(["published"]);

    const adminBlogs = await request(app)
      .get("/api/blogs")
      .set("Authorization", `Bearer ${token}`);
    expect(adminBlogs.body).toHaveLength(2);
  });

  it("creates, updates, reads, and deletes a blog post", async () => {
    const payload = {
      title: "CMS test post",
      slug: "cms-test-post",
      category: "Test category",
      content: "<p>Testing the CMS flow</p>",
      status: "published",
      tags: ["test"],
    };
    const created = await request(app)
      .post("/api/blogs")
      .set("Authorization", `Bearer ${token}`)
      .send(payload);
    expect(created.status).toBe(201);
    const id = created.body.id;

    const publicRead = await request(app).get(`/api/blogs/${payload.slug}`);
    expect(publicRead.status).toBe(200);
    expect(publicRead.body.title).toBe(payload.title);

    const updated = await request(app)
      .put(`/api/blogs/${id}`)
      .set("Authorization", `Bearer ${token}`)
      .send({ ...payload, title: "Updated CMS test post" });
    expect(updated.status).toBe(200);
    expect(updated.body.title).toBe("Updated CMS test post");

    const deleted = await request(app)
      .delete(`/api/blogs/${id}`)
      .set("Authorization", `Bearer ${token}`);
    expect(deleted.status).toBe(200);
  });

  it("creates and deletes categories and uploaded media", async () => {
    const category = await request(app)
      .post("/api/categories")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "New category", color: "green" });
    expect(category.status).toBe(201);
    expect(category.body.categories).toHaveLength(2);

    const mediaResponse = await request(app)
      .post("/api/media")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Uploaded test image",
        alt: "test image",
        url: "data:image/jpeg;base64,dGVzdA==",
      });
    expect(mediaResponse.status).toBe(201);
    expect(mediaResponse.body.media[0].name).toBe("Uploaded test image");
    const mediaId = mediaResponse.body.media[0].id;

    const deletedMedia = await request(app)
      .delete(`/api/media/${mediaId}`)
      .set("Authorization", `Bearer ${token}`);
    expect(deletedMedia.status).toBe(200);

    const deletedCategory = await request(app)
      .delete(`/api/categories/${encodeURIComponent(category.body.category.id)}`)
      .set("Authorization", `Bearer ${token}`);
    expect(deletedCategory.status).toBe(200);
  });
});
