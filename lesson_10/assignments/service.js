const markAssignmentSubmitted = (assignment) => {
  if (assignment.status === "UNSUBMITTED") {
    assignment.status = "SUBMITTED";
  } else {
    throw new Error("Already submitted");
  }

  return assignment;
};

const markAssignment = (assignment, mark) => {
  if (
    (assignment.status === "MARKED" && assignment.mark < 50) ||
    assignment.status === "SUBMITTED"
  ) {
    assignment.mark = mark;
  } else if (assignment.status !== "SUBMITTED") {
    throw new Error("Not submitted");
  }

  assignment.status = "MARKED";

  return assignment;
};

module.exports = {
  markAssignmentSubmitted,
  markAssignment,
};
