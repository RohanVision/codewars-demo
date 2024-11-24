// 35. Search Insert Position
// Easy
// Topics
// Companies
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4


// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

/*
Intuition
To solve this in O log n time, use the binary search method, which works with divide and conquer.
With this we can eliminate half of the array per iteration
Given a sorted array, we search through the array to see if a target is present, while each search divides the array length into two

Approach
Create two variable left and right position starting at 0 and array length -1 respectively

compute the mid point of the array, which is gotten by add (left + right) / 2

Create another variable insertPosition for where target posiiton in the situation where the target value is not part of the array

Using a while loop, loop through the array as long as left is smaller or equal to right
1. check if the array in midpoint is lesser then target, update the right value to midpoint -1 and the insertPosition to midPoint
2. if the array in midpoint is greater than target, update the left value to midpoint + 1 and the insertPosition to midPoint + 1
3. if array in midPoint equals the target return the midPoint

if array in midpoint equals the target, return the midPoint value else return insertedPosition

*/