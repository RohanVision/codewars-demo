// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:


function diagonalDifference(arr) {
    let primaryArr = 0;
    let secondaryArr = 0;
    for (let i = 0; i < arr[0].length; i++) {
        primaryArr += arr[i][i];
        secondaryArr += arr[i][arr.length - i - 1]
    }
    return Math.abs(primaryArr - secondaryArr)
}