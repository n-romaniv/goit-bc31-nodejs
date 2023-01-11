const Assignment = require("../model");

const service = require("../service");

describe("submit assignment", () => {
  it("marks assignment submitted", () => {
    const assignment = new Assignment({ status: "UNSUBMITTED" });

    const changedAssignment = service.markAssignmentSubmitted(assignment);

    expect(changedAssignment.status).toEqual("SUBMITTED");
  });

  it("throws an error if already submitted", () => {
    const assignment = new Assignment({ status: "SUBMITTED" });

    expect(() => service.markAssignmentSubmitted(assignment)).toThrow(
      "Already submitted"
    );
  });
});

describe("mark assignment", () => {
  it("allows marking an assignment if submitted", () => {
    const assignment = new Assignment({ status: "SUBMITTED" });
    const mark = 90;

    const changedAssignment = service.markAssignment(assignment, mark);

    expect(changedAssignment.mark).toEqual(mark);
  });

  it("throws an error if not submitted", () => {
    const assignment = new Assignment({ status: "UNSUBMITTED" });
    const mark = 90;

    expect(() => service.markAssignment(assignment, mark)).toThrow();
  });

  it("allows changing mark if marked and below 50", () => {
    const assignment = new Assignment({ status: "MARKED", mark: 40 });
    const mark = 60;

    const changedAssignment = service.markAssignment(assignment, mark);

    expect(changedAssignment.mark).toEqual(mark);
  });

  it("sets status to MARKED", () => {
    const assignment = new Assignment({ status: "SUBMITTED" });
    const mark = 60;

    const changedAssignment = service.markAssignment(assignment, mark);

    expect(changedAssignment.status).toEqual("MARKED");
  });
});
