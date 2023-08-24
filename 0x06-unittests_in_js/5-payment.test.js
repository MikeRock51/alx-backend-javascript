const sinon = require("sinon");
const { expect } = require("chai");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./5-payment");


describe("sendPaymentRequestToApi", function () {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(console, "log");
  });

  afterEach(() => {
    spy.restore();
  });

  it("Validates that sendPaymentRequestAPI logs the right output", function () {    
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith("The total is: 120")).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });

  it("Validates that sendPaymentRequestAPI logs the right output", function () {    
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith("The total is: 20")).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});
