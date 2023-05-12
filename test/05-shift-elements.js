const chai = require("chai");
const expect = chai.expect;
const assert = require("assert");

const shiftElements = require("../problems/05-shift-elements");

describe("shiftElements", () => {
	it("should shift elements to the right by 2 positions", () => {
		const arr = [1, 2, 3, 4, 5];
		const result = shiftElements(arr, 2);
		assert.deepEqual(result, [4, 5, 1, 2, 3]);
	});

	it("should handle empty arrays", () => {
		const arr = [];
		const result = shiftElements(arr, 3);
		assert.deepEqual(result, []);
	});

	it("should handle shifting by 0 positions", () => {
		const arr = [1, 2, 3];
		const result = shiftElements(arr, 0);
		assert.deepEqual(result, [1, 2, 3]);
	});
});
