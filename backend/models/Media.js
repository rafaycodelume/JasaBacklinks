const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    alt: { type: String, default: "" },
    url: { type: String, required: true },
    uploadedAt: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.models.Media || mongoose.model("Media", MediaSchema);
