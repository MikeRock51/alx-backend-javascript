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
});
