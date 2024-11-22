// 118. Pascal's Triangle
// Solved
// Easy
// Topics
// Companies
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:




// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]


// Constraints:

// 1 <= numRows <= 30


var generate = function (numRows) {
    let output = [[1]];

    if (numRows === 1) return output;

    for (let i = 1; i < numRows; i++) {
        let temp = [];
        for (j = 0; j < i + 1; j++) {
            let num1 = output[i - 1][j - 1] ?? 0
            let num2 = output[i - 1][j] ?? 0
            temp.push(num1 + num2)
        }
        console.log("Temp", temp)
        output.push(temp)
    }
    return output;
};