const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String,
  },
  phone: String,
  email: {
    type: String,
    required: true,
  },
  averageGrade: {
    type: String,
    enum: ["A", "B", "C", "D", "E"],
  },
  numGrade: {
    type: Number,
    min: 0,
    max: 100,
  },
  courses: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "Course",
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
