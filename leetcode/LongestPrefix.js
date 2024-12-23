// 14. Longest Common Prefix
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

// Also can do with binary search and divide and conquare

function longestCommonPrefix(str) {
    let res = "";
    for (let i = 0; i < str[0].length; i++) {
        letter = str[0][i];
        for (let j = 1; j < str.length; j++) {
            if (str[j][i] !== letter) {
                return res;
            }
        }
        res += letter;
    }
    return res;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
