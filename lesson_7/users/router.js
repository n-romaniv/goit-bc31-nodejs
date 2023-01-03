const express = require("express");

const {} = require("./controllers");

const router = express.Router();

router.post("/login");
router.post("/signup");
router.post("/logout");

router.get("/profile");
router.put("/profile");
router.get("/users");
router.get("/users/:id");

module.exports = router;
