// 66. Plus One
// Solved
// Easy
// Topics
// Companies
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.



// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].


// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
};


// BIGInt solution
var plusOne = function (digits) {
    return (BigInt(digits.join('')) + BigInt(1)).toString().split('')
};


// Visual Representation
// Input: [9, 9]
// Initial Input

// digits = [9, 9]
// Start Loop (i = 1, the last digit):

// Current digit: digits[1] = 9
// Since digits[1] === 9, set it to 0 (carry over):

// digits = [9, 0]
// Continue Loop (i = 0, the second-last digit):

// Current digit: digits[0] = 9
// Since digits[0] === 9, set it to 0 (carry over):

// digits = [0, 0]
// Loop Ends:

// All digits are processed, and there’s still a carry. Add 1 to the front:

// digits = [1, 0, 0]
// Return the Result
// [1, 0, 0]


// Initial Input
// digits = [1, 2, 3]
// Loop Execution
// Iteration 1 (i = 2 — last digit):
// digits[2] = 3
// Check: digits[2] < 9 → true (3 < 9)
// Increment: digits[2] = digits[2] + 1 = 4
// Return: [1, 2, 4] (no carry, so the loop ends here).
// Final Output
// The function returns [1, 2, 4].