// 448. Find All Numbers Disappeared in an Array
// Hint
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]


// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n


// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.


/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function(nums) {
//     const map = {};
//     const res = [];

//     for(let num of nums){
//         map[num] = (map[num] || 0) + 1;
//     }

//     for(let i = 1; i <= nums.length; i++){
//         if(!map[i]){
//             res.push(i);
//         }
//     }
//     return res;
// };

//Follow up spaceO(1)
var findDisappearedNumbers = function (nums) {
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        let currIndex = Math.abs(nums[i]);
        let markPos = currIndex - 1;
        if (nums[markPos] > 0) {
            nums[markPos] = -nums[markPos];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res.push(i + 1);
        }
    }
    return res;
}