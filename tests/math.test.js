const math = require("../src/math");
const expect = require("chai").expect;

describe("Test Add Numbers", () => {
  it("Number Add", () => {
    actual = math.addition(1, 2);
    expect(actual).to.equal(3);
  });
});
