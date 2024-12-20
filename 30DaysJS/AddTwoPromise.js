// 2723. Add Two Promises

// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.


// Example 1:

// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
// Example 2:

// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// Output: -2
// Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.


// Constraints:

// promise1 and promise2 are promises that resolve with a number

/*

Intuition:
The goal of the task is to create a new promise that resolves with the sum of the values from two given promises.

Approach:
Use Promise.all() method along with await to wait for both promises to resolve. Once they resolve, their values are retrieved and stored in the variables value1 and value2. Finally, a new promise is returned with the sum of value1 and value2.

Complexity:
Time complexity:
The time complexity is determined by the longest running promise since the Promise.all() method waits for both promises to resolve concurrently. Therefore, the time complexity can be considered as O(max(promise1 time, promise2 time)).

Space complexity:
The space complexity is constant, as the code does not create any additional data structures or use additional memory that scales with the input size.
Therefore, the space complexity can be considered as O(1).

*/
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    const [value1, value2] = await Promise.all([promise1, promise2]);

    return value1 + value2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */