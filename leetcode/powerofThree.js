// 326. Power of Three
// Solved
// Easy

// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.



// Example 1:

// Input: n = 27
// Output: true
// Explanation: 27 = 33
// Example 2:

// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.
// Example 3:

// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).


// Constraints:

// -231 <= n <= 231 - 1


// Follow up: Could you solve it without loops/recursion?

// Practice Weekend
function powerThree(n) {
    while (n > 1) {
        n = n / 3
    }
    return n === 1
}


const isPowerOfThree = function (n) {
    return n > 0 && 1162261467 % n === 0;
};

// Step 1: Rephrase the question and explain what you understood
// Step 2: Ask for edge cases by changing the given example or making your own
// Step 3: Ask for types of inputs
// Step 4: Explain first approach of the solution that comes to your mind in a high level
// Step 5: Do pseudocode while explaining or write the code
// Step 6: Ask the interviewer if the solution is okay
// Step 7: if he says it is good, then code it up
// Step 8: DRY RUN the CODE
// Step 9 : Optimise further if possible
