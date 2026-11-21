const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const Blog = require("../models/Blog");
const Category = require("../models/Category");
const Media = require("../models/Media");

const DEFAULT_CATEGORIES = [
  { id: "cat-1", name: "PBN Strategy", color: "blue" },
  { id: "cat-2", name: "Regional .ID SEO", color: "red" },
  { id: "cat-3", name: "EDU & GOV Authority", color: "purple" },
  { id: "cat-4", name: "Case Studies", color: "green" },
];
const DEFAULT_MEDIA = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../media.json"), "utf8")
);

async function ensureCmsDefaults() {
  await Promise.all([
    ...DEFAULT_CATEGORIES.map((item) =>
      Category.updateOne({ id: item.id }, { $setOnInsert: item }, { upsert: true })
    ),
    ...DEFAULT_MEDIA.map((item) =>
      Media.updateOne({ id: item.id }, { $setOnInsert: item }, { upsert: true })
    ),
  ]);
}

const AUTH_ERROR =
  "Unauthorised access attempt blocked. Verify your ADMIN_PASSWORD.";

function login(req, res) {
  const configuredPassword = process.env.ADMIN_PASSWORD;
  if (!configuredPassword) {
    console.error("Admin login is not configured: ADMIN_PASSWORD is missing.");
    return res
      .status(500)
      .json({ error: "Admin login is not configured on server." });
  }

  const { password } = req.body || {};
  if (typeof password !== "string" || password !== configuredPassword) {
    return res.status(401).json({ error: AUTH_ERROR });
  }

  const secret = process.env.ADMIN_JWT_SECRET;
  if (!secret) {
    console.error("Admin login is not configured: ADMIN_JWT_SECRET is missing.");
    return res
      .status(500)
      .json({ error: "Admin login is not configured on server." });
  }

  try {
    const token = jwt.sign({ role: "admin" }, secret, { expiresIn: "7d" });
    return res.status(200).json({ success: true, token });
  } catch (error) {
    console.error("Could not create admin login token:", error);
    return res
      .status(500)
      .json({ error: "Admin login is not configured on server." });
  }
}

function me(req, res) {
  return res.json({ success: true, admin: true });
}

function logout(req, res) {
  return res.json({ success: true });
}

function isAdminRequest(req) {
  return req.admin?.role === "admin";
}

async function listBlogs(req, res, next) {
  try {
    const filter = isAdminRequest(req) ? {} : { status: "published" };
    const blogs = await Blog.find(filter).sort({ createdAt: -1 }).lean();
    return res.json(blogs);
  } catch (error) {
    return next(error);
  }
}

async function getBlog(req, res, next) {
  try {
    const filter = { slug: req.params.slug };
    if (!isAdminRequest(req)) filter.status = "published";
    const blog = await Blog.findOne(filter).lean();
    if (!blog) return res.status(404).json({ error: "Blog post not found." });
    return res.json(blog);
  } catch (error) {
    return next(error);
  }
}

async function saveBlog(req, res, next) {
  try {
    const body = req.body || {};
    if (!body.title || !body.slug || !body.category || !body.content) {
      return res.status(400).json({ error: "Title, slug, category, and content are required." });
    }
    const id = req.params.id || `blog-${crypto.randomUUID()}`;
    const blog = await Blog.findOneAndUpdate(
      { id },
      {
        $set: {
          ...body,
          id,
          publishedAt:
            body.status === "published" ? new Date().toISOString().slice(0, 10) : undefined,
        },
      },
      { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }
    ).lean();
    return res.status(req.params.id ? 200 : 201).json(blog);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ error: "A blog post with this slug already exists." });
    }
    return next(error);
  }
}

async function deleteBlog(req, res, next) {
  try {
    const deleted = await Blog.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ error: "Blog post not found." });
    return res.json({ success: true });
  } catch (error) {
    return next(error);
  }
}

async function listCategories(req, res, next) {
  try {
    const categories = await Category.find().sort({ name: 1 }).lean();
    return res.json(categories);
  } catch (error) {
    return next(error);
  }
}

async function saveCategory(req, res, next) {
  try {
    const name = typeof req.body?.name === "string" ? req.body.name.trim() : "";
    if (!name) return res.status(400).json({ error: "Category name is required." });
    const category = await Category.create({
      id: `cat-${crypto.randomUUID()}`,
      name,
      color: req.body.color || "blue",
    });
    const categories = await Category.find().sort({ name: 1 }).lean();
    return res.status(201).json({ category, categories });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ error: "That category already exists." });
    }
    return next(error);
  }
}

async function deleteCategory(req, res, next) {
  try {
    if ((await Category.countDocuments()) <= 1) {
      return res.status(400).json({ error: "At least one category must remain." });
    }
    const deleted = await Category.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ error: "Category not found." });
    const categories = await Category.find().sort({ name: 1 }).lean();
    return res.json({ success: true, categories });
  } catch (error) {
    return next(error);
  }
}

async function listMedia(req, res, next) {
  try {
    const media = await Media.find().sort({ createdAt: -1 }).lean();
    return res.json(media);
  } catch (error) {
    return next(error);
  }
}

async function saveMedia(req, res, next) {
  try {
    const { name, alt, url } = req.body || {};
    if (typeof name !== "string" || !name.trim() || typeof url !== "string") {
      return res.status(400).json({ error: "Media name and URL are required." });
    }
    const isImageDataUrl = /^data:image\/(jpeg|png|webp|gif);base64,[A-Za-z0-9+/]+=*$/i.test(url);
    const isHttpsUrl = /^https:\/\//i.test(url);
    if (!isImageDataUrl && !isHttpsUrl) {
      return res.status(400).json({ error: "Use an HTTPS image URL or supported image data URL." });
    }
    if (url.length > 12 * 1024 * 1024) {
      return res.status(413).json({ error: "Image is too large after compression." });
    }
    await Media.create({
      id: `media-${crypto.randomUUID()}`,
      name: name.trim(),
      alt: typeof alt === "string" ? alt.trim() : "",
      url,
      uploadedAt: new Date().toISOString().slice(0, 10),
    });
    const media = await Media.find().sort({ createdAt: -1 }).lean();
    return res.status(201).json({ media });
  } catch (error) {
    return next(error);
  }
}

async function deleteMedia(req, res, next) {
  try {
    const deleted = await Media.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ error: "Media item not found." });
    const media = await Media.find().sort({ createdAt: -1 }).lean();
    return res.json({ success: true, media });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  login,
  me,
  logout,
  listBlogs,
  getBlog,
  saveBlog,
  deleteBlog,
  listCategories,
  saveCategory,
  deleteCategory,
  listMedia,
  saveMedia,
  deleteMedia,
  ensureCmsDefaults,
};
