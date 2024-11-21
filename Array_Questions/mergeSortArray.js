// 88. Merge Sorted Array
// Solved
// Easy
// Topics
// Companies
// Hint
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let first = m - 1;
    let second = n - 1;
    let i = m + n - 1;

    while (second >= 0) {
        // let fVal = nums1[first];
        // let sVal = nums2[second];

        if (nums1[first] > nums2[second]) {
            nums1[i] = nums1[first];
            i--;
            first--;
        } else {
            nums1[i] = nums2[second];
            i--;
            second--;
        }
    }
};


// How the Function Works

// Pointers:
// first: Points to the last valid element in nums1 (index m - 1).
// second: Points to the last element in nums2 (index n - 1).
// i: Points to the last position in nums1 (index m + n - 1).

// Compare and Place:
// Compare the elements at nums1[first] and nums2[second].
// Place the larger value at nums1[i].
// Move the corresponding pointer (first or second) and decrement i.

// Handle Remaining Elements:
// If nums2 still has remaining elements after the loop, place them in nums1 (no need to handle nums1 because
// it’s already in place).