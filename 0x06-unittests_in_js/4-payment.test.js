const sinon = require("sinon");
const { expect } = require("chai");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./4-payment");

describe("sendPaymentRequestToApi", function () {
  it("Validates the usage of of Utils.calculateNumber using stub/spy", function () {
    const stub = sinon.stub(Utils, "calculateNumber");
    stub.returns(10);
    const spy = sinon.spy(console, "log");
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith("The total is 10")).to.be.true;
    expect(spy.called).to.be.true;
    spy.restore();
    stub.restore();
  });
});
