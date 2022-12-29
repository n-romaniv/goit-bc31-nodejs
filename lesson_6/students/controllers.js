const Student = require("./model");

const listStudents = async (req, res) => {
  const students = await Student.find().sort({
    "name.last": 1,
    "name.first": 1,
  });

  res.json(students).status(200);
};

const findStudentById = async (req, res) => {
  const student = await Student.findById(req.param.id).populate("courses");

  res.json(student).status(200);
};

const createStudent = async (req, res) => {
  const newStudent = new Student(req.body);

  await newStudent.save();

  res.status(201);
};

const updateStudent = async (req, res) => {
  const updatedStudent = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedStudent).status(200);
};

module.exports = {
  listStudents,
  findStudentById,
  createStudent,
  updateStudent,
};
