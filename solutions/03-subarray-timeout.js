function subArrDelay(arr) {
	// We begin iterating through the incoming array
	arr.forEach((subArr) => {
		// Desctructure the first and second items from the sub array
		const [first, second] = subArr;
		// If the first item is a function then we pass it into the setTimeout
		// as the first argument
		if (typeof first === "function") {
			setTimeout(first, second);
		} else {
			setTimeout(second, first);
		}
	});
}
