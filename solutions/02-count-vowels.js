// The way we approach this problem is by attempting to reduce our string to a length of 0. Doing this allows us to then
// check the index of 0 each time we pop a function off the call stack. If the current index 0 is a vowel then we can
// return the previous return value with one added. If not we just return the previous return value

function countVowels(str) {
    // Base case - check to see if the string is empty. Then we can start popping our functions off the call stack 
    if (!str.length) return 0;
    // Declare a vowels variable that stores all our vowels
    const vowels = 'aeiouAEIOU';
    // Check to see if the index 0 in our string is a vowel. 
    // If it is we recursively call the function and set up a future
    // return with 1 being added to it. If not then we setup a future return
    // with nothing being added to it
    if (vowels.includes(str[0])) {
        return 1 + countVowels(str.slice(1));
    } else {
        return countVowels(str.slice(1));
    }
}