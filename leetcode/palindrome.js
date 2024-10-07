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


const check = (s) => {
    let l = 0;
    let r = s.length - 1;
    while (l <= r) {
        if (s[l] === s[r]) {
            l++;
            r--
        } else {
            return false;
        }
    }
    return true;
}

var isPalindrome = function (s) {
    const regx = /[^a-zA-Z0-9]/g;
    const clean = s.replace(regx, "").toLowerCase();
    return check(clean)
};

// second Approach

// var isPalindrome = function(s) {
//     const result = s.replace(/[\W_]/g, "").toLowerCase();
//     console.log(result)
//     let l = 0;
//     let r = result.length - 1;
//     while(l < r){
//         if(result[l] !== result[r]){
//             return false;
//         }
//         l++;
//         r--
//     }
//     return true;
// };