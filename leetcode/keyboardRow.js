// 500. Keyboard Row
// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// Note that the strings are case -insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".


//Example 1:
// Input: words = ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]
// Explanation:
// Both "a" and "A" are in the 2nd row of the American keyboard due to case insensitivity.

//Example 2:
// Input: words = ["omk"]
// Output: []
// Example 3:
// Input: words = ["adsdf", "sfd"]
// Output: ["adsdf", "sfd"]

// Constraints:
// 1 <= words.length <= 20
// 1 <= words[i].length <= 100
// words[i] consists of English letters(both lowercase and uppercase). 


/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    return words.filter(word => wordCheck(word));
};

let wordCheck = function (word) {
    const row1 = "qwertyuiop";
    const row2 = "asdfghjkl";
    const row3 = "zxcvbnm";

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    word = word.toLowerCase();
    let N = word.length;

    for (let i = 0; i < word.length; i++) {
        if (row1.includes(word[i])) {
            count1++;
        }
        if (row2.includes(word[i])) {
            count2++;
        }
        if (row3.includes(word[i])) {
            count3++;
        }
    }
    return count1 === N || count2 === N || count3 === N;
}

// time complexity = o(n*m) - we loop through words which how many words n and later how long that word which is m
// space complexity = o(m)