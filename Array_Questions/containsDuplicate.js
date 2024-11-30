// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, 
//and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Explanation:
// All elements are distinct.

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true



// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109


/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     nums.sort((a,b) => a - b);

//     for(let i = 1; i < nums.length; i++){
//         if(nums[i] === nums[i - 1]){
//             return true;
//         }
//     }
//     return false;
// };

// second approach with SET


var containsDuplicate = function (nums) {
    const numsSet = new Set();
    for (const n of nums) {
        if (numsSet.has(n)) {
            return true;
        } else {
            numsSet.add(n);
        }
    }
    return false;
};

const containsDuplicate = function (nums) {
    const newSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (newSet.has(nums[i])) {
            return true;
        } else {
            newSet.add(nums[i]);
        }
    }
    return false;
};