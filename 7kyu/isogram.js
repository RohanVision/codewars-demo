// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)



// approach 1

function isIsogram(str) {
    str = str.toLowerCase();
    return str.split("").every((c, i) => str.indexOf(c) == i);
}

// approach 2
function isIsogram(str) {
    return new Set(str.toUpperCase()).size == str.length;
}

// approach 3
function isIsogram(str) {
    const wordLower = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (wordLower[i] === wordLower[j])
                return false;

            console.log("for-loop #1:", wordLower[i])
            console.log("for-loop #2:", wordLower[j])
        }
    }
    return true;
}
console.log(isIsogram("amazing"));