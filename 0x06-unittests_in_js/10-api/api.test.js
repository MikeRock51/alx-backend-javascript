const { expect } = require("chai");
const { response } = require("express");
const request = require("request");

describe("Integration Test", function () {
  it("Tests the index page", function (done) {
    request("http://127.0.0.1:7865/", function (error, response, body) {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it("Tests the /cart route with number", function (done) {
    request("http://127.0.0.1:7865/cart/18", function (error, response, body) {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 18');
      done();
    });
  });

  it("Tests the /cart route with NaN", function (done) {
    request("http://127.0.0.1:7865/cart/mike", function (error, response, body) {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });
});
