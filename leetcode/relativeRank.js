// 506. Relative Ranks

// You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

// The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.

// Example 1:
// Input: score = [5,4,3,2,1]
// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

// Example 2:
// Input: score = [10,3,8,9,4]
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

// Constraints:
// n == score.length
// 1 <= n <= 104
// 0 <= score[i] <= 106
// All the values in score are unique.


/**
 * @param {number[]} score
 * @return {string[]}
 */
// var findRelativeRanks = function (score) {
//     let arr = score.slice(0);

//     arr.sort((a, b) => b - a);

//     let hashObj = new Map();
//     let n = arr.length;

//     for (let i = 0; i < n; i++) {
//         if (i == 0) hashObj.set(arr[i], "Gold Medal");
//         else if (i == 1) hashObj.set(arr[i], "Silver Medal");
//         else if (i == 2) hashObj.set(arr[i], "Bronze Medal");
//         else hashObj.set(arr[i], (i + 1).toString());
//     }

//     for (let i = 0; i < n; i++) {
//         score[i] = hashObj.get(score[i]);
//     }
//     return score;
// };

var findRelativeRanks = function (score) {
    // Creates a mapping between each score and its original index.
    const scoreToIndex = new Map();
    for (let i = 0; i < score.length; i++) {
        // setting the index to the score
        // scoreToIndex.set(10, 0); // Add key-value pair: 10 → 0
        // scoreToIndex.set(3, 1);  // Add key-value pair: 3 → 1
        scoreToIndex.set(score[i], i);
    }
    // sorted in descending order by sprading score
    const sortedScore = [...score].sort((a, b) => b - a);
    // empty array rank of the same length as score to store the ranks for each score.
    const rank = new Array(score.length);
    // Loop over sortedArray
    for (let i = 0; i < sortedScore.length; i++) {
        // Use the scoreToIndex map to get the original index of the current score in sortedScore.
        const originalIndex = scoreToIndex.get(sortedScore[i]);
        if (i === 0) {
            rank[originalIndex] = "Gold Medal";
        } else if (i === 1) {
            rank[originalIndex] = "Silver Medal";
        } else if (i === 2) {
            rank[originalIndex] = "Bronze Medal";
        } else {
            rank[originalIndex] = (i + 1).toString();
        }
    }
    return rank;
}
console.log(findRelativeRanks([10, 3, 8, 9, 4]))