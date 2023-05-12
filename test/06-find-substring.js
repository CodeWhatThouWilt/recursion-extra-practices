const chai = require("chai");
const expect = chai.expect;
const assert = require("assert");

const findSubstring = require("../problems/06-find-substring");

describe("findSubstring", () => {
	it("should return true if the substring is found", () => {
		expect(findSubstring("Hello, World!", "Hello")).to.be.true;
		expect(findSubstring("This is a test", "is a")).to.be.true;
	});

	it("should return false if the substring is not found", () => {
		expect(findSubstring("Hello, World!", "Hi")).to.be.false;
		expect(findSubstring("This is a test", "example")).to.be.false;
	});

	it("should return true if the substring is an empty string", () => {
		expect(findSubstring("Hello, World!", "")).to.be.true;
		expect(findSubstring("This is a test", "")).to.be.true;
	});
});
