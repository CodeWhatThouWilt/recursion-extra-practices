const chai = require("chai");
const expect = chai.expect;
const assert = require("assert");

const deepCopy = require("../problems/bonus-deep-copy-object");

describe("deepCopy", () => {
	it("should create a deep copy of an object", () => {
		const obj = {
			name: "John",
			age: 30,
			address: {
				city: "New York",
				country: "USA",
			},
		};

		const copy = deepCopy(obj);

		expect(copy).to.not.equal(obj);
		expect(copy).to.deep.equal(obj);

		copy.name = "Jane";
		copy.address.city = "San Francisco";

		expect(copy.name).to.not.equal(obj.name);
		expect(copy.address.city).to.not.equal(obj.address.city);
	});
});
