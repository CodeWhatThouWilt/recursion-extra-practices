const assert = require("assert");

const countVowels = require("../problems/02-count-vowels");

describe("countVowels()", function () {
	it("Should return the count of vowels in the string", function () {
		assert.deepEqual(countVowels("This is a test string"), 5);
		assert.deepEqual(countVowels("HeLlO ThIs Is AnOtHeR sTrIng"), 8);
		assert.deepEqual(countVowels("third string here for our examples"), 10);
		assert.deepEqual(countVowels("aaaaaa"), 6);
		assert.deepEqual(countVowels("t"), 0);
	});
});
