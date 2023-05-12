function findSubstring(string, substring) {
	// Base case: if the substring is empty, return true
	if (substring === "") {
		return true;
	}

	// Base case: if the string is empty, or its length is less than the substring's length,
	// return false since the substring cannot be found
	if (string === "" || string.length < substring.length) {
		return false;
	}

	// Check if the substring matches the start of the string
	if (string.startsWith(substring)) {
		return true;
	}

	// Recursively check if the substring exists within the remaining part of the string
	return findSubstring(string.slice(1), substring);
}
