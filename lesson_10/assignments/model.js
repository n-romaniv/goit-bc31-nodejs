const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ["UNSUBMITTED", "SUBMITTED", "MARKED"],
  },
  mark: {
    type: Number,
    min: 0,
    max: 100,
  },
  studentId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Student",
  },
});

const Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports = Assignment;
