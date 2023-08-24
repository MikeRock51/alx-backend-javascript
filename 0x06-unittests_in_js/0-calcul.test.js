const calculateNumber = require("./0-calcul");
const assert = require("assert");

describe("Test calculateNumber", function () {
  it("Checks if decimal rounds", function () {
    assert.equal(calculateNumber(6, 4), 10);
  });
  it("Checks if numbers round", function () {
    assert.equal(calculateNumber(2.8, 1.5), 5);
  });
  it("Checks if negative numbers round", function () {
    assert.equal(calculateNumber(-10.5, -69.2), -79);
  });
  it("Checks negative arg 1 round", function () {
    assert.equal(calculateNumber(-10.5, 69.2), 59);
  });
  it("Checks negative arg 2 round", function () {
    assert.equal(calculateNumber(10.5, -69.2), -58);
  });
});
