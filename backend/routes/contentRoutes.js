const express = require("express");
const adminAuth = require("../middlewares/authMiddleware");
const cmsController = require("../controllers/cmsController");

const router = express.Router();

router.get("/blogs", adminAuth.optional, cmsController.listBlogs);
router.get("/blogs/:slug", adminAuth.optional, cmsController.getBlog);
router.post("/blogs", adminAuth, cmsController.saveBlog);
router.put("/blogs/:id", adminAuth, cmsController.saveBlog);
router.delete("/blogs/:id", adminAuth, cmsController.deleteBlog);

router.get("/categories", cmsController.listCategories);
router.post("/categories", adminAuth, cmsController.saveCategory);
router.delete("/categories/:id", adminAuth, cmsController.deleteCategory);

router.get("/media", cmsController.listMedia);
router.post("/media", adminAuth, cmsController.saveMedia);
router.delete("/media/:id", adminAuth, cmsController.deleteMedia);

module.exports = router;
