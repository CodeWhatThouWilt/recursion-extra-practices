function deepCopy(obj) {
	// If the input is not an object, return it as is
	if (typeof obj !== "object" || obj === null) {
		return obj;
	}

	// Create an empty copy of the same type as the input object
	const copy = Array.isArray(obj) ? [] : {};

	// Recursively copy each property of the object
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			copy[key] = deepCopy(obj[key]);
		}
	}

	return copy;
}
