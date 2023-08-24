const calculateNumber = require("./2-calcul_chai");
const expect = require("chai").expect;

describe("Test calculateNumber", function () {
  describe("Test SUM", function () {
    it("Checks for equality", function () {
      expect(calculateNumber("SUM", 2.8, 3.2)).to.equal(6);
    });
    it("Checks if numbers round", function () {
      expect(calculateNumber("SUM", 2.8, 3.1)).to.not.be.equal(5.9);
    });
    it("Checks if negative numbers round", function () {
      expect(calculateNumber("SUM", -10.5, -69.2)).to.be.equal(-79);
    });
    it("Checks negative arg 1 round", function () {
      expect(calculateNumber("SUM", -10.5, 69.2)).to.be.equal(59);
    });
    it("Checks negative arg 2 round", function () {
      expect(calculateNumber("SUM", 10.5, -69.2)).to.be.equal(-58);
    });
  });

  describe("Test SUBTRACT", function () {
    it("Checks for equality", function () {
      expect(calculateNumber("SUBTRACT", 2.8, 3.2)).to.be.equal(0);
    });
    it("Checks if numbers round", function () {
      expect(calculateNumber("SUBTRACT", 5.5, 2.0)).to.not.be.equal(4.5);
    });
    it("Checks if negative numbers round", function () {
      expect(calculateNumber("SUBTRACT", -69.2, -10.5)).to.be.equal(-59);
    });
    it("Checks negative arg 1 round", function () {
      expect(calculateNumber("SUBTRACT", -10.5, 69.2)).to.be.equal(-79);
    });
    it("Checks negative arg 2 round", function () {
      expect(calculateNumber("SUBTRACT", 80.3, -6.2)).to.be.equal(86);
    });
  });

  describe("Test DIVIDE", function () {
    it("Checks for equality", function () {
      expect(calculateNumber("DIVIDE", 2.8, 3.2)).to.be.equal(1);
    });
    it("Checks if numbers round", function () {
      expect(calculateNumber("DIVIDE", 5.5, 2.0)).to.not.be.equal(3.5);
    });
    it("Checks if negative numbers round", function () {
      expect(calculateNumber("DIVIDE", -69.2, -10.5)).to.be.equal(6.9);
    });
    it("Checks divide by 0", function () {
      expect(calculateNumber("DIVIDE", 10.5, 0)).to.be.equal("Error");
    });
    it("Checks 0 arg 1", function () {
      expect(calculateNumber("DIVIDE", 0, 4.2)).to.be.equal(0);
    });
  });
});
