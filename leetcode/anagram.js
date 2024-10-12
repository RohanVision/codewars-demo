// Given two strings s and t, return true if t is an 
// anagram of s, and false otherwise.

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


// Practice  weekend
function anagram(s, t) {
    if (s.length !== t.length) return false;
    let obj = {}

    for (let letter of s) {
        obj[letter] = (obj[letter] || 0) + 1;
    }

    for (let letter of t) {
        if (obj[letter] === undefined || obj[letter] === 0) {
            return false;
        }
        obj[letter]--;
    }
    return true;
}

console.log(anagram("anagram", "nagaram"));
console.log(anagram("rat", "car"))