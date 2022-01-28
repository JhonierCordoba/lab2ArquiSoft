'use strict';
var expect = require("chai").expect;
var calculator = require("../app/calculator");

describe("Calculator -test", function () {
    describe("testing the operations", function () {
        it("testing sum operation", function () {
            expect(calculator.add(1, 1)).to.equal(1 + 1);
        });
        it("testing minus operation", function () {
            expect(calculator.minus(1, 1)).to.equal(1 - 1);
        });
        it("testing multiply operation", function () {
            expect(calculator.multiply(1, 1)).to.equal(1);
        });
        it("testing divide operation", function () {
            expect(calculator.divide(1, 1)).to.equal(1);
        });
        it("testing divide operation by zero", function () {
            const expectError = new Error("Can't divide by zero");
            expect(calculator.divide(3, 0).message).to.equal(expectError.message);
        });
    })
});
