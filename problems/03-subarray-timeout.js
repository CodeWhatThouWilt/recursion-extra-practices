/***********************************************************************
Write a function called `subArrDelay` that takes in an array
of arrays. Each subarray will have only two items, a function and a delay.
There is no ordering to the subarrays. For example sometimes the callback
will be at the first index and sometimes it will be at the second index.
When subArrDelay is ran it should call each of the callback functions
with a delay that matches their associated delay in the subarray.

Note: the callback functions will not need to accept any arguments so you
don't need to worry about adding them in.

Example:

const funcOne = () => console.log("Function one ran!");
const funcTwo = () => console.log("Function two ran!");
const funcThree = () => console.log("Function three ran!");



const nestedArr = [
    [funcOne, 1000],
    [2000, funcTwo],
    [funcThree, 1000]
];

subArrDelay(nestedArr);
// Expected order of functions: funcOne > funcThree > funcTwo

***********************************************************************/

function subArrDelay(arr) {
	// Your code here
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = subArrDelay;
