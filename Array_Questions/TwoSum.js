// 1. Two Sum
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?



function twoSum(numbers, target) {
    const obj = {};

    for (let i = 0; i < numbers.length; i++) {
        let diff = target - numbers[i];
        if (obj.hasOwnProperty(diff)) {
            return [obj[diff], i];
        } else {
            obj[numbers[i]] = i;
        }
    }
    return null;
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6));

// 1. Create empty hasObj
// 2. loop over the Array;
// 3. check the diff = target - numbers[i]
// 4. if diff is present in the hasObj then
//         return [hasObj[diff], i] which is => [0, 1]
// 5. else store value into hasobj in key value pair => 2:0
// 6. if empty array return null
