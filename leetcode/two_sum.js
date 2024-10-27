/*
1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.


Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/
function twoSums(num, target) {
    let obj = {};
    for (let i = 0; i < num.length; i++) {
        diff = target - num[i];
        if (obj.hasOwnProperty(diff)) {
            return [obj[diff], i]
        }
        obj[diff] = i
    }
    return null;
}


// practice 1
function twoSums(num, target) {
    let hashObj = {};

    for (let i = 0; i < num.length; i++) {
        diff = target - num[i];
        if (hashObj.hasOwnProperty(diff)) {
            return [hashObj[diff], i];
        }
        hashObj[diff] = i;
    }
    return null;
}

// Optimal Solutions

// function twoSum(numbers, target) {
//     let result = {}

//     for (let i = 0; i < numbers.length; i++) {
//         let diff = target - numbers[i];

//         if (result.hasOwnProperty(diff)) {
//             return [i, result[diff]];
//         }
//         result[numbers[i]] = i
//     }
//     return null;
// }

/*
Intuition
The problem requires finding two numbers in an array that sum up to a given target.My first thought was to use a brute force approach, where I would check each pair of numbers to see if they add up to the target.However, this would have a time complexity of O(n ^ 2), which is inefficient for large arrays.

To optimize this, I realized that we can use a hash map to store numbers and their indices as we iterate through the array.By checking if the difference between the target and the current number exists in the map, we can find the solution in a single pass.

1. Initialize an empty hash map (numToIndexMap) to store the numbers we've seen so far and their corresponding indices.
2. Iterate over the array using a for loop.
3. For each number nums[i], calculate the difference diff between the target and the current number (diff = target - nums[i]).
4. Check if diff exists in numToIndexMap. If it does, it means we've found the two numbers that add up to the target. Return their indices [i, numToIndexMap.get(diff)].
5. If diff does not exist in the map, store the current number and its index in numToIndexMap.
6. If no such pair is found by the end of the loop, return null. (Though according to the problem constraints, a solution is guaranteed, so this case won't occur.)

Complexity
Time complexity:
The time complexity of this approach is O(n), where n is the length of the array. This is because we are iterating through the array once, and each lookup or insertion in the hash map takes O(1) time on average.

Space complexity:
The space complexity is O(n) because, in the worst case, we might store all the numbers in the hash map if no two numbers add up to the target until the last element.

*/