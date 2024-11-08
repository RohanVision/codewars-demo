// 2727. Is Object Empty
// Easy
// Companies
// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.



// Example 1:

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:

// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
// Example 3:

// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.


// Constraints:

// obj is a valid JSON object or array
// 2 <= JSON.stringify(obj).length <= 105


// Can you solve it in O(1) time?




// Approaches:
// The first way is to use JSON.stringify to convert the input array/object to a string. If the array or object is empty, it returns a string with opening and closing braces or curly braces.

// The second approach is to use Object.keys() as suggested above to obtain the length and then verify if it is empty or not.

// The third approach is to just use a for loop iterator to check whether there is something to iterate, and if there is, it implies the object is not empty, and if there is nothing to iterate, it implies the object is empty.

// Approach 1: Using JSON.stringify
// When you stringify an object using JSON.stringify(), the resulting JSON string will represent the object's key-value pairs as a string. In this context, the "length" property of the resulting string will represent the number of characters in the string, not the number of key-value pairs in the original object.

// For example, consider the following object:

// const person = {
//   name: "Pavitr Prabhakar",
//   age: 17,
//   city: "Mumbattan"
// };
// If you stringify this object using JSON.stringify(), it will produce the following JSON string:

// {"name":"Pavitr Prabhakar","age":17,"city":"Mumbattan"}
// The length of this JSON string will include the opening and closing curly braces, quotation marks, colons, and commas.

// Thus in our case it should have a length of two i.e. for opening and closing braces/curly braces.


// Complexity Analysis:
// Time complexity: O(n), where n is the size of object

// Space complexity: O(n), where n is the size of object

// Approach 2: Using Object.keys
// We can check the length of the keys using Object.keys() and if it's 0 then return true else false.


// Complexity Analysis:
// Time complexity: O(n), where n is the size of object

// Space complexity: O(n), where n is the size of object

// Approach 3: Using loop
// If the array/object is not empty, the interpreter will enter the for-in loop, and therefore the first return statement false will be run and if it is empty, the interpreter will not enter the for-in loop, and so the second return statement true will be executed.


// Complexity Analysis:
// The time and space is O(1) because we are just checking if we can enter the loop or not.

// Time complexity: O(1)

// Space complexity: O(1)

// Interview Tips:
// What is the difference between an empty object and an object with no properties?

// An empty object refers to an object that does not have any key-value pairs. It means that the object does not contain any properties. On the other hand, an object with no properties still exists and may have properties in the future. It simply means that it currently does not have any properties defined.
// How can you check if an object is empty in JavaScript without using the length of its keys?

// Another way to check if an object is empty without using the length of its keys is by using the Object.keys() method. This method returns an array of the object's own enumerable property names (keys). You can then check if the length of the array is zero to determine if the object is empty.
// What is a Plain Old JavaScript Object (POJO)?

// A Plain Old JavaScript Object (POJO) is a term used to describe a simple JavaScript object that is created using the object literal syntax or the Object() constructor. It refers to an object that does not have any specialized behavior or methods inherited from custom prototypes or built-in JavaScript classes. POJOs are often used as data transfer objects (DTOs) or as simple containers for storing and accessing data.


/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
// var isEmpty = function(obj) {
//     if(Object.keys(obj).length === 0){
//         return true;
//     } else {
//         return false;
//     }
// };


var isEmpty = function (obj) {
    if (JSON.stringify(obj).length <= 2) return true
    else return false
};

// var isEmpty = function(obj) {
//     for (const _ in obj) return false;
//     return true;
// };