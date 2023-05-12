const chai = require("chai");
const expect = chai.expect;

const removeDuplicates = require("../problems/04-remove-duplicates");

describe("removeDuplicates", () => {
	it("should remove duplicate elements from an array", () => {
		expect(removeDuplicates([1, 2, 3, 4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
		expect(removeDuplicates([1, 2, 2, 3, 3, 3, 4, 5])).to.deep.equal([
			1, 2, 3, 4, 5,
		]);
		expect(removeDuplicates([1, 1, 1, 1])).to.deep.equal([1]);
		expect(removeDuplicates(["a", "b", "b", "c", "c", "c"])).to.deep.equal([
			"a",
			"b",
			"c",
		]);
	});
});
