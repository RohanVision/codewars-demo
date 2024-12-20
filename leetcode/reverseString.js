// 344. Reverse String

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.


// Two Pointers Approach

function reverse(s) {
    i = 0;
    j = s.length - 1;
    while (i <= j) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
    return s;
}

// function reverse(s) {
//     i = 0;
//     j = s.length - 1;
//     while (i <= j) {
//         [s[i], s[j]] = [s[j], s[i]];
//         i++;
//         j--;
//     }
// }

console.log(reverse(["H", "a", "n", "n", "a", "h"]))
console.log(reverse(["h", "e", "l", "l", "o"]))