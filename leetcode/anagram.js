// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?


// var isAnagram = function (s, t) {
//     if (s.length !== t.length) return false;
//     let countObj = {}

//     for (let letter of s) {
//         countObj[letter] = (countObj[letter] || 0) + 1;
//     }

//     for (let letter of t) {
//         if (countObj[letter] === undefined || countObj[letter] === 0) {
//             return false
//         }
//         countObj[letter]--
//     }
//     return true;
// };



var isAnagram = function (s, t) {
    if (s.length !== t.length) return false; // base case - if length is not match return false;
    let obj = {}; // create empty hashObj to count the freq of letter in string S

    for (let letter of s) {
        obj[letter] = (obj[letter] || 0) + 1;
        // loop over the string (s) and check if letter present in the obj if yes increase the count by 1 if not add count 1
    }

    for (let letter of t) {
        if (obj[letter] === undefined || obj[letter] === 0) {
            // loop over string(t) and check if letter is undefine or 0 and return false
            return false;
        }
        obj[letter]--; // reduce the letter count
    }
    return true; // if all letter match return true
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));


// Time Complexity: O(n)
// 1.Iterate through both strings once O(n)
// 2.Lookups and updates in the object are O(1)

// Space Complexity: O(1)(constant in terms of English alphabet size)
// 1. The object stores a fixed number of keys (letters in the alphabet)