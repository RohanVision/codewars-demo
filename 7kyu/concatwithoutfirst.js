// Write program to concate two string except their first charcter

// str.shift(); if we chain shift wont provide new array so can chain with join()
function concateWithoutFirstChar(str1, str2) {
    return str1.slice(1) + str2.slice(1);

}
console.log(concateWithoutFirstChar("abcd", "junior"));