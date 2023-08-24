const sinon = require("sinon");
const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("Test getPaymentTokenFromAPI", function () {
  it("Runs an async test", function (done) {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data.data).to.be.equal("Successful response from the API");
      expect(typeof data).to.be.equal("object");
      done();
    });
  });

  it("Tests unresolved promise", function (done) {
    this.timeout(0);
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.equal('');
      done();
    });
  });
});
