const calculateNumber = require("./1-calcul");
const expect = require("chai").expect;

describe("Test calculateNumber", function () {
  describe("Test SUM", function () {
    it("Checks for equality", function () {
      expect(calculateNumber("SUM", 2.8, 3.2)).to.equal(6);
    });
    it("Checks if numbers round", function () {
      assert.notEqual(calculateNumber("SUM", 2.8, 3.1), 5.9);
    });
    it("Checks if negative numbers round", function () {
      assert.equal(calculateNumber("SUM", -10.5, -69.2), -79);
    });
    it("Checks negative arg 1 round", function () {
      assert.equal(calculateNumber("SUM", -10.5, 69.2), 59);
    });
    it("Checks negative arg 2 round", function () {
      assert.equal(calculateNumber("SUM", 10.5, -69.2), -58);
    });
  });

  describe("Test SUBTRACT", function () {
    it("Checks for equality", function () {
      assert.equal(calculateNumber("SUBTRACT", 2.8, 3.2), 0);
    });
    it("Checks if numbers round", function () {
      assert.notEqual(calculateNumber("SUBTRACT", 5.5, 2.0), 4.5);
    });
    it("Checks if negative numbers round", function () {
      assert.equal(calculateNumber("SUBTRACT", -69.2, -10.5), -59);
    });
    it("Checks negative arg 1 round", function () {
      assert.equal(calculateNumber("SUBTRACT", -10.5, 69.2), -79);
    });
    it("Checks negative arg 2 round", function () {
      assert.equal(calculateNumber("SUBTRACT", 80.3, -6.2), 86);
    });
  });

  describe("Test DIVIDE", function () {
    it("Checks for equality", function () {
      assert.equal(calculateNumber("DIVIDE", 2.8, 3.2), 1);
    });
    it("Checks if numbers round", function () {
      assert.notEqual(calculateNumber("DIVIDE", 5.5, 2.0), 3.5);
    });
    it("Checks if negative numbers round", function () {
      assert.equal(calculateNumber("DIVIDE", -69.2, -10.5), 6.9);
    });
    it("Checks divide by 0", function () {
      assert.equal(calculateNumber("DIVIDE", 10.5, 0), "Error");
    });
    it("Checks 0 arg 1", function () {
      assert.equal(calculateNumber("DIVIDE", 0, 4.2), 0);
    });
  });
});
