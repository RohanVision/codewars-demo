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
function checkPal(s) {
    i = 0;
    j = s.length - 1;
    while (i <= j) {
        if (s[i] === s[j]) {
            i++;
            j--
        } else {
            return false;
        }
    }
    return true;
}

var isPalindrome = function (s) {
    const regx = /[^a-zA-Z]/g;
    const clean = s.replace(regx, "").toLowerCase();
    return checkPal(clean)
};


function checkPal(s) {
    let i = 0;
    let j = s.length - 1;
    while (i <= j) {
        if (s[i] === s[j]) {
            i++;
            j--;
        }
        return false;
    }
    return true;
}

const isPalindrome = function (s) {
    const regx = /[^A-Za-z]/g;
    const clean = s.replace(regx, "").toLowerCase();
    return checkPal(clean)
}

// second Approach

var isPalindrome = function (s) {
    const result = s.replace(/[\W_]/g, "").toLowerCase();
    let l = 0;
    let r = result.length - 1;
    while (l < r) {
        if (result[l] !== result[r]) {
            return false;
        }
        l++;
        r--
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))