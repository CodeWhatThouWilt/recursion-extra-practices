function removeDuplicates(arr) {
	// Base case: If the array is empty or contains only one element, return the array as it is
	if (arr.length <= 1) {
		return arr;
	}

	// Recursive case: Remove duplicates from the subarray excluding the first element
	const rest = removeDuplicates(arr.slice(1));

	// If the first element is not present in the rest of the array, add it to the result
	if (!rest.includes(arr[0])) {
		return [arr[0], ...rest];
	}

	// If the first element is already present in the rest of the array, return the rest
	return rest;
}
