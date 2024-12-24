// 70. Climbing Stairs
// Easy
// Topics
// Companies
// Hint
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:
// 1 <= n <= 45


/**
 * @param {number} n
 * @return {number}
 */

// Dynamic Programming
// var climbStairs = function(n) {
//     if (n === 1) return 1;
//     if (n === 2) return 2;

//     let dp = [0, 1, 2];
//     for(let i = 3; i <= n; i++){
//         console.log(dp[i])
//         dp[i] = dp[i - 1] + dp[i - 2];
//     }
//     return dp[n]
// };

// Optimize Approach with constant space O(1) using two variables

const climbStairs = function (n) {
    // base case
    if (n === 1) return 1;
    if (n === 2) return 2;
    // variable to track previous results
    let prev1 = 2, prev2 = 1;
    // loop start from n = 3 to n number
    for (let i = 3; i <= n; i++) {
        // Calculate the current number of ways as current = prev2 + prev1.
        // Update prev2 to the old prev1 (shift to the next step).
        // Update prev1 to current (shift to the next step).
        let current = prev2 + prev1;
        prev2 = prev1;
        prev1 = current;
    }
    // return result by the end of the loop
    return prev1;
}

console.log(climbStairs(6))