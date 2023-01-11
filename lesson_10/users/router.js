const express = require("express");
const userMiddleware = require("../middlewares/user");
const uploadsMiddleware = require("../middlewares/uploads");

const {
  login,
  signup,
  logout,
  getProfile,
  getProfilePhoto,
  updateProfile,
} = require("./controllers");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", userMiddleware, logout);

router.get("/profile", userMiddleware, getProfile);
router.get("/profile/photo", userMiddleware, getProfilePhoto);
router.put(
  "/profile",
  userMiddleware,
  uploadsMiddleware.single("profilePhoto"),
  updateProfile
);

module.exports = router;
