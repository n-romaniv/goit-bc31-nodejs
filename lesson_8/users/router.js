const express = require("express");
const userMiddleware = require("../middlewares/user");

const {} = require("./controllers");

const router = express.Router();

router.post("/login");
router.post("/signup");
router.post("/logout", userMiddleware);

router.get("/profile", userMiddleware);
router.put("/profile", userMiddleware);

module.exports = router;
