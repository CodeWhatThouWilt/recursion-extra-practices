function shiftElements(arr, positions) {
	// Base case: If positions is 0 or array is empty, return the original array
	if (positions === 0 || arr.length === 0) {
		return arr;
	}

	// Recursive case:
	// Remove the last element from the array and store it in a variable
	const lastElement = arr.pop();
	// Insert the last element at the beginning of the array
	arr.unshift(lastElement);

	// Recursive call: Shift the remaining elements by (positions - 1) times
	return shiftElements(arr, positions - 1);
}
