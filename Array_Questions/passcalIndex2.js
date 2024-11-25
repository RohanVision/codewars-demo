// 119. Pascal's Triangle II
// Solved
// Easy
// Topics
// Companies
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:



// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]


// Constraints:

// 0 <= rowIndex <= 33


// Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?


var getRow = function (rowIndex) {
    let res = [1];
    let prev = 1;

    for (let i = 1; i <= rowIndex; i++) {
        let next_val = prev * (rowIndex - i + 1) / i;
        res.push(next_val);
        prev = next_val;
    }
    return res
};

// The solution based on the formula of

// next_val = prev * (rowIndex - i + 1) / i;
// i = 1 = 1 * (3 - 1 + 1) / 1 = 3 push to res[1, 3]
// i = 2 = 3 * (3 - 2 + 1) / 2 = 3 push value to res[1, 3, 3]
// i = 3 = 3 * (3 - 3 + 1) / 3 = 1 push value to res[1, 3, 3, 1]


