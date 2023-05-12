// ! With Math.min
function sort(nums, sorted = []) {
    // Base case: We check if nums array is empty because we'll be removing each num from it
    if (nums.length === 0) return sorted;
    // We get the smallest number in the array using Math.min
    const smallest = Math.min(...nums);
    // We get the index of the smallest number in the array
    const smallestIdx = nums.indexOf(smallest);
    // We push the smallest number into sorted which is our ordered array
    sorted.push(smallest);
    // We remove the smallest number from the array with a combination of splice / the numbers index
    nums.splice(smallestIdx, 1);
    // We then pass the mutated nums and sorted arrays into the function to be processed again.
    // This will continue until the nums array is completely empty. At that point sorted will be returned
    // which contains all the ordered numbers. sorted will be fed back down the chain of returns.
    return sort(nums, sorted);
}

// ! With regular for loop
function sort(nums, sorted = []) {
     // Base case: We check if nums array is empty because we'll be removing each num from it
    if (nums.length === 0) return sorted;
    // We define two variables to keep track of the smallest number and its corresponding index
    let smallest = nums[0];
    let smallestIdx = 0;
    // Loop through each number in the nums array
    for (let i = 0; i < nums.length; i++) {
        // Get the num that correlates with the current index
        const num = nums[i];
        // Check to see if num is smaller than the current smallest number
        if (num < smallest) {
            // Reassign the value of smallest to the current number
            smallest = num;
            // Reassign the value of the smallest numbers index to the current index
            smallestIdx = i;
        }
    }
    // We push the smallest number into sorted which is our ordered array
    sorted.push(smallest);
    // We remove the smallest number from the array with a combination of splice / the numbers index
    nums.splice(smallestIdx, 1);
    // We then pass the mutated nums and sorted arrays into the function to be processed again.
    // This will continue until the nums array is completely empty. At that point sorted will be returned
    // which contains all the ordered numbers. sorted will be fed back down the chain of returns.
    return sort(nums, sorted)
}

// ! With for each
function sort(nums, sorted = []) {
    // Base case: We check if nums array is empty because we'll be removing each num from it
    if (nums.length === 0) return sorted;
    // We define two variables to keep track of the smallest number and its corresponding index
    let smallest = nums[0];
    let smallestIdx = 0;
    // Loop through each number in the nums array
    nums.forEach((num, i) => {
        // Check to see if num is smaller than the current smallest number
        if (num < smallest) {
            // Reassign the value of smallest to the current number
            smallest = num;
            // Reassign the value of the smallest numbers index to the current index
            smallestIdx = i;
        }
    });
    // We push the smallest number into sorted which is our ordered array
    sorted.push(smallest);
    // We remove the smallest number from the array with a combination of splice / the numbers index
    nums.splice(smallestIdx, 1);
    // We then pass the mutated nums and sorted arrays into the function to be processed again.
    // This will continue until the nums array is completely empty. At that point sorted will be returned
    // which contains all the ordered numbers. sorted will be fed back down the chain of returns.
    return sort(nums, sorted)
}


// ! With reduce
function sort(nums, sorted = []) {
     // Base case: We check if nums array is empty because we'll be removing each num from it
    if (nums.length === 0) return sorted;
    // Loop through each number in the nums array and have our accumulator start as an object
    // with a key for the smallest number and the index of that number
    const obj = nums.reduce((acc, num, i) => {
        // Check to see if num is smaller than the current smallest number
        if (num < acc.smallest) {
            acc.smallest = num;
            acc.smallestIdx = i;
        }
        return acc;
    }, { smallest: nums[0], smallestIdx: 0 });
    // We push the smallest number into sorted which is our ordered array
    sorted.push(obj.smallest);
    // We remove the smallest number from the array with a combination of splice / the numbers index
    nums.splice(obj.smallestIdx, 1);
    // We then pass the mutated nums and sorted arrays into the function to be processed again.
    // This will continue until the nums array is completely empty. At that point sorted will be returned
    // which contains all the ordered numbers. sorted will be fed back down the chain of returns.
    return sort(nums, sorted)
}