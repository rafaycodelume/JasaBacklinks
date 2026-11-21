const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    seoTitle: String,
    slug: { type: String, required: true, unique: true, index: true },
    focusKeyword: String,
    category: { type: String, required: true },
    readTime: String,
    author: String,
    authorRole: String,
    image: String,
    imageAlt: String,
    excerpt: String,
    content: String,
    tags: { type: [String], default: [] },
    status: { type: String, enum: ["draft", "published"], default: "draft" },
    featured: { type: Boolean, default: false },
    seoScore: Number,
    publishedAt: String,
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
