const Course = require("./model");
const Student = require("../students/model");

const listCourses = async (req, res) => {
  const courses = await Course.find().sort({
    name: 1,
  });

  res.json(courses).status(200);
};

const findCourseById = async (req, res) => {
  const [course, students] = await Promise.all([
    Course.findById(req.param.id),
    Student.find({ courses: req.param.id }),
  ]);

  res.json({ course, students }).status(200);
};

const createCourse = async (req, res) => {
  const newCourse = new Course(req.body);

  await newCourse.save();

  res.status(201);
};

const updateCourse = async (req, res) => {
  const updatedCourse = await Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedCourse).status(200);
};

module.exports = {
  listCourses,
  findCourseById,
  createCourse,
  updateCourse,
};
