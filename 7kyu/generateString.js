// Write programm create new string from a given string taking the first 3 charcters and last 3 charcters of given string and adding them together. if string length is not more than 3 return original string

function generateString(str) {
    if (str.length < 3) {
        return str
    } else {
        return str.slice(0, 3) + str.slice(-3)
    }
}

console.log(generateString("abc"));
console.log(generateString("abckrl"));
console.log(generateString("abcasdasd"));
console.log(generateString("ab"));