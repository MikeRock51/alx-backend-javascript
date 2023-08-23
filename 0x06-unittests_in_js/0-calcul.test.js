const calculateNumber = require("./0-calcul");
const assert = require("assert");

describe("Test calculateNumber", function () {
  it("Checks for equality", function () {
    assert.equal(calculateNumber(2.8, 3.2), 6);
  });
  it("Checks if numbers round", function () {
    assert.notEqual(calculateNumber(2.8, 3.1), 5.9);
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
