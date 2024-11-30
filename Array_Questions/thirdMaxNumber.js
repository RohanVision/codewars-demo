// 414. Third Maximum Number
// Solved
// Easy
// Topics
// Companies
// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.



// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.


// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1



var thirdMax = function (nums) {
    nums.sort((a, b) => b - a);

    let elemCounted = 1;
    let prevElement = nums[0];

    for (let i = 1; i < nums.length; i++) {
        //check current ele diff with prev ele if yes increase the number elemecount and set prevElemet to curr
        if (nums[i] != prevElement) {
            elemCounted += 1;
            prevElement = nums[i];
        }
        // if we counted 3 numbers then return current number
        if (elemCounted === 3) {
            return nums[i];
        }
    }
    // we never count 3 distict number then return largest number
    return nums[0]
};


// Approach 1: Sorting
// Intuition
// The most intuitive approach will be sorting the array and finding the 3 largest number.
// We also have to take care of duplicates, we have to consider only distinct numbers.

// After the array is sorted in non-increasing order, we can check the current number with the previous number. If the current number is different from the previous number it means the current number can be counted.
// And whenever we count 3 different numbers we return that 3 distinct number.

// sorting

// Algorithm
// Sort the nums array in non-increasing order.

// Initialize variables:

// elemCounted = 1, it counts the number of distinct numbers that occurred till now.
// prevElem to the first array number, it denotes the previous counted number of the array.
// Iterate on nums array's second number to the last number:

// If the current number is different than prevElem, it means it is a new distinct number, thus increment elemCounted by 1 and store the current number in prevElem.
// If elemCounted reaches 3, it means the current number is the third largest number, thus return this number.
// If we traversed on the whole array it means 3 distinct numbers were not present in the array, thus we return the largest number, which is at the beginning of the nums array.




// Complexity Analysis
// If N is the number of elements in the input array.

// Time complexity: O(NlogN).
// We sort the nums array, which takes O(NlogN) time.
// We iterate on the nums array once to find the 3 distinct number.
// Thus, overall it takes, O(NlogN+N)=O(NlogN) time.

// Space complexity: O(1).