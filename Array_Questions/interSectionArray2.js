
// 350. Intersection of Two Arrays II
// Easy
// Topics
// Companies
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.



// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.


// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000


// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

// HasMap Solution

var intersect = function (nums1, nums2) {
    let map = {};
    let result = [];

    for (let n of nums1) {
        map[n] = (map[n] || 0) + 1;
    }

    for (let n of nums2) {
        if (map[n] > 0) {
            result.push(n);
            map[n]--;
        }

    }
    return result;

}

// Sorting Two-Pointers Solution

var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let i = 0, j = 0;
    const res = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++
        } else if (nums1[i] > nums2[j]) {
            j++
        } else {
            res.push(nums1[i]);
            i++; j++
        }
    }

    return res;
};



// Intuition
// To find the intersection of two arrays where each element in the result must appear as many times as it shows in both arrays, we can take advantage of sorting and two-pointer techniques. Sorting helps in efficiently finding common elements by scanning through both arrays in a linear fashion. Using two pointers, one for each array, allows us to traverse both arrays and find common elements without having to repeatedly search through the arrays.

// Approach
// Sort Both Arrays: Sorting helps in comparing elements of both arrays efficiently. By sorting both arrays, we can then use a two-pointer approach to find common elements.

// Initialize Pointers: Use two pointers i and j to traverse through nums1 and nums2 respectively. Also, use a pointer k to keep track of the position in nums1 where we store the result.

// Traverse Both Arrays:

// Compare the elements at the current positions of both pointers.
// If the element in nums1 is less than the element in nums2, increment pointer i.
// If the element in nums1 is greater than the element in nums2, increment pointer j.
// If the elements are equal, it means we have found a common element. Store this element in nums1[k], increment i, j, and k.
// Return the Result: The result is stored in the first k positions of nums1. Use Arrays.copyOfRange to return this part of the array.

// Complexity
// Time Complexity: Sorting both arrays takes (O(n log n + m log m)), where (n) is the length of nums1 and (m) is the length of nums2. The two-pointer traversal takes (O(n + m)). Thus, the overall time complexity is (O(n log n + m log m + n + m) = O(n log n + m log m)).
// Space Complexity: The space complexity is (O(1)) if we ignore the space used for sorting, as we are not using any extra space apart from the input arrays.