// 14. Longest Common Prefix
// Solved
// Easy

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// here is my solution

var longestCommonPrefix = function (strs) {
    let result = "";
    for (let i = 0; i < strs[0].length; i++) {
        letter = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== letter) return result;
        }
        result += letter;
    }
    return result;
};



// Practice weeken - also can do with binary search and divide and conquare

function longestPrefix(str) {
    let result = ""
    for (let i = 0; i < str[0].length; i++) {
        letter = str[0][i];
        for (let j = 1; j < str.length; j++) {
            if (str[j][i] !== letter) return result;
        }
        result += letter;
    }
    return result;
}
