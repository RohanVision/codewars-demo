// 485. Max Consecutive Ones

// Hint
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:

// Input: nums = [1, 1, 0, 1, 1, 1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1, 0, 1, 1, 0, 1]
// Output: 2


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let currCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currCount++;
        } else {
            currCount = 0;
        }
        if (currCount > max) {
            max = currCount;
        }
    }
    return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));


// Example Explanation to an Interviewer
// Introduction:

// "This function finds the maximum number of consecutive 1s in a binary array by iterating through it while maintaining two variables: max for the longest streak and currCount for the current streak."
// Key Steps:

// "If the current element is 1, I increment currCount. If it's 0, I reset currCount to 0."
// "At each step, I compare currCount with max and update max if the current streak is longer."
// Dry Run for Example nums = [1, 1, 0, 1, 1, 1]:

// Use a table as shown above to demonstrate each iteration.
//     Conclusion:

// "After iterating through the array, the function returns max, which in this case is 3, representing the longest streak of consecutive 1s."