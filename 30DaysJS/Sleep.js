// Sleep
// Hint
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.



// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });
// Example 2:

// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.


// Constraints:

// 1 <= millis <= 1000


// First Approach without await
async function sleep(millis) {

    function callback(resolve, reject) {
        setTimeout(resolve, millis)
    }

    return new Promise(callback);

}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */


async function sleep(millis) {
    await new Promise((resolve, reject) => {
        setTimeout(resolve, millis)
    })
}