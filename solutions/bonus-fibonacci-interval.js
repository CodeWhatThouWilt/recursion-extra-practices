function printFibonacci(n) {
	let a = 0;
	let b = 1;

	// Print the first number in the sequence
	console.log(a);

	// Use setInterval to log subsequent numbers with a delay of 1 second
	const intervalId = setInterval(() => {
		// Print the current number in the sequence
		console.log(b);

		// Calculate the next number in the sequence
		const temp = a + b;
		a = b;
		b = temp;

		// Check if the next number exceeds the given limit
		if (b > n) {
			// Clear the interval once the limit is exceeded
			clearInterval(intervalId);
		}
	}, 1000);
}
