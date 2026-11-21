const express = require("express");
const adminAuth = require("../middlewares/authMiddleware");
const cmsController = require("../controllers/cmsController");

const router = express.Router();

router.post("/login", cmsController.login);
router.get("/me", adminAuth, cmsController.me);
// Existing frontend uses /verify and /logout for the same stateless JWT session.
router.get("/verify", adminAuth, cmsController.me);
router.post("/logout", adminAuth, cmsController.logout);

module.exports = router;
