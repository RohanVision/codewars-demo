// 2724. Sort By
// Easy
// Companies
// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.



// Example 1:

// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]
// Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.
// Example 2:

// Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
// Output: [{"x": -1}, {"x": 0}, {"x": 1}]
// Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.
// Example 3:

// Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
// Output: [[10, 1], [5, 2], [3, 4]]
// Explanation: arr is sorted in ascending order by number at index=1. 


// Constraints:

// arr is a valid JSON array
// fn is a function that returns a number
// 1 <= arr.length <= 5 * 105


/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b))
};


// Interview Tips:
// What does the Array.prototype.sort() method in JavaScript do?

// Array.prototype.sort() is a built-in JavaScript method used to sort the elements of an array in place. By default, it sorts elements as strings, which can lead to unexpected results when sorting numbers. However, you can also provide a custom comparator function to determine how the array should be sorted.
// How does a comparator function work with Array.prototype.sort()?

// A comparator function in Array.prototype.sort() is a function that takes two arguments (commonly referred to as a and b) and returns a value indicating how a and b should be sorted relative to each other. If the function returns a value less than 0, a is sorted before b. If it returns a value greater than 0, a is sorted after b. If it returns 0, a and b remain in their current order.
// How would you sort an array of objects based on a particular property?

// To sort an array of objects based on a particular property, you can use Array.prototype.sort() with a custom comparator function. The comparator function can access the desired property on the two objects it compares, and determine their sort order based on the values of that property.
// What does String.prototype.localeCompare() do, and why might you use it in a comparator function?

// String.prototype.localeCompare() is a method that compares two strings based on their locale (i.e., language and regional settings). This can be useful in a comparator function when sorting strings that may contain special characters or when the sort order should respect specific language rules. For example, in Swedish, "ö" is a separate letter that comes after "z" in the alphabet, so a locale-aware sort is necessary to get the correct order.
// Can you sort an array of numbers in descending order using Array.prototype.sort()? How?

// Yes, you can sort an array of numbers in descending order using Array.prototype.sort() by providing a comparator function that sorts b before a if b is greater than a. Here is an example: let arr = [1, 5, 2]; arr.sort((a, b) => b - a);