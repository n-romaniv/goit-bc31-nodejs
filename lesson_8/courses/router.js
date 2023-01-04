const express = require("express");

const {
  findCourseById,
  listCourses,
  createCourse,
  updateCourse,
} = require("./controllers");

const router = express.Router();

const handleError = (controller) => (req, res) => {
  controller(req, res).catch((error) => {});
};

router.get("/", handleError(listCourses));
router.get("/:id", findCourseById);
router.post("/", createCourse);
router.put("/:id", updateCourse);

module.exports = router;
