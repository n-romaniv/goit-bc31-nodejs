const express = require("express");

const {
  findStudentById,
  listStudents,
  createStudent,
  updateStudent,
} = require("./controllers");

const router = express.Router();

const handleError = (controller) => (req, res) => {
  controller(req, res).catch((error) => {});
};

router.get("/", handleError(listStudents));
router.get("/:id", findStudentById);
router.post("/", createStudent);
router.put("/:id", updateStudent);

module.exports = router;
