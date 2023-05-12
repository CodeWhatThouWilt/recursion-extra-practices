const chai = require("chai");
const expect = chai.expect;
const assert = require("assert");

const printFibonacci = require("../problems/bonus-fibonacci-interval");

describe("printFibonacci", () => {
	it("should print the Fibonacci sequence up to a given number n", function (done) {
		this.timeout(10000);

		const logs = [];
		const originalLog = console.log;
		console.log = (...args) => {
			logs.push(args);
		};

		printFibonacci(13);

		setTimeout(() => {
			console.log = originalLog;

			expect(logs).to.deep.equal([[0], [1], [1], [2], [3], [5], [8], [13]]);

			done();
		}, 9000);
	});
});
