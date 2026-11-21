const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, unique: true },
    color: { type: String, default: "blue" },
  },
  { timestamps: true, versionKey: false }
);

module.exports =
  mongoose.models.Category || mongoose.model("Category", CategorySchema);
