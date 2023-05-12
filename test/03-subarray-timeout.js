const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const subArrDelay = require("../problems/03-subarray-timeout");

describe("subArrDelay", () => {
	it("should call the functions with the specified delays in the correct order", function (done) {
		this.timeout(5000); // Extend the timeout duration

		const funcOne = sinon.fake();
		const funcTwo = sinon.fake();
		const funcThree = sinon.fake();

		const nestedArr = [
			[funcOne, 1000],
			[2000, funcTwo],
			[funcThree, 1000],
		];

		subArrDelay(nestedArr);

		setTimeout(() => {
			expect(funcOne.calledOnce).to.be.true;
			expect(funcTwo.calledOnce).to.be.true;
			expect(funcThree.calledOnce).to.be.true;
			expect(funcOne.calledBefore(funcThree)).to.be.true;
			expect(funcThree.calledBefore(funcTwo)).to.be.true;
			done();
		}, 4000); // Adjust the duration to match the delays
	});
});
