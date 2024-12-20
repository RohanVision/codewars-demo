// 566. Reshape the Matrix
// Hint
// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row - traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.



//     Example 1:
// Input: mat = [[1, 2], [3, 4]], r = 1, c = 4
// Output: [[1, 2, 3, 4]]

// Example 2:
// Input: mat = [[1, 2], [3, 4]], r = 2, c = 4
// Output: [[1, 2], [3, 4]]


// Constraints:
// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
//     - 1000 <= mat[i][j] <= 1000
// 1 <= r, c <= 300

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    let rows = mat.length;
    let col = mat[0].length;

    if (rows * col !== r * c) {
        return mat;
    }

    let log_list = [];
    let ans = [];

    for (let row of mat) {
        for (let cols of row) {
            log_list.push(cols);
        }
    }

    for (let i = 0; i < log_list.length; i += c) {
        ans.push(log_list.slice(i, i + c))
    }

    return ans;
};