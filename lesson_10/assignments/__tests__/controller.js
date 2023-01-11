jest.mock("../service");

const { submitAssignment } = require("../controller");
const service = require("../service");

class MockHttpResponse {
  status;
  ended = false;

  status(status) {
    this.status = status;
    return this;
  }

  end() {
    this.ended = true;
    return this;
  }
}

describe("submit assignment", () => {
  it("sets status to submitted and returns successful response", async () => {
    const req = { params: { id: 1 } };
    const res = new MockHttpResponse();

    await submitAssignment(req, res);

    expect(res.status).toEqual(200);
    expect(res.ended).toBeTrue();
    expect(service.saveSubmittedAssignment).toHaveBeenCalled();
  });
});
