const express = require("express");

const {
  findStudentById,
  listStudents,
  createStudent,
  updateStudent,
} = require("./controllers");

const router = express.Router();

router.get("/", listStudents);
router.get("/:id", findStudentById);
router.post("/", createStudent);
router.put("/:id", updateStudent);

module.exports = router;
