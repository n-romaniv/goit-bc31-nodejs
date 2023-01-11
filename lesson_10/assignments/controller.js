const Assignment = require("./model");

const { markAssignmentSubmitted, markAssignment } = require("./service");

const submitAssignment = async (req, res) => {
  const id = req.params.id;
  const assignment = await Assignment.findById(id);

  markAssignmentSubmitted(assignment);

  await assignment.save();

  res.status(200).end();
};

const markAssignment = async (req, res) => {
  const id = req.params.id;
  const { mark } = req.body;
  const assignment = await Assignment.findById(id);

  markAssignment(assignment, mark);

  await assignment.save();

  res.status(200).json(assignment);
};

module.exports = {
  submitAssignment,
};
