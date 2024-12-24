// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// Practice weekend
const checkPal = function (s) {
    // Start with i = 0, j = 20 (length - 1).
    let i = 0;
    let j = s.length - 1;
    // loop will run until the i and j meet or cross each other
    while (i <= j) {
        if (s[i] === s[j]) { // Compare characters at both ends
            i++; // Move the start pointer forward
            j--; // Move the end pointer backward
        } else {
            return false; // If characters don't match, it's not a palindrome
        }
    }
    return true; // If all characters match, it's a palindrome
}
// preposses function
const isPalindromes = function (s) {
    const regx = /[^a-zA-Z/]/g; // ^ Negates the set, meaning "not in this set. means match all non-alphabetic"
    const clean = s.replace(regx, "").toLowerCase(); // convert the string "amanaplanacanalpanama"
    return checkPal(clean) // return the function checkpal
}

// second Approach

// var isPalindrome = function (s) {
//     const result = s.replace(/[\W_]/g, "").toLowerCase();
//     let l = 0;
//     let r = result.length - 1;
//     while (l < r) {
//         if (result[l] !== result[r]) {
//             return false;
//         }
//         l++;
//         r--
//     }
//     return true;
// };

// console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindromes("A man, a plan, a canal: Panama"))