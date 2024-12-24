// function pal(str) {
//     if (str.length === 1) return true
//     if (str.length === 2) return str[0] === str[1]
//     if (str[0] === str.slice(-1)) return pal(str.slice(1, -1))
//     return false;
// }
// console.log(pal("tacocat"))
// console.log(pal('amanaplanacanalpanama'));

function pal(str) {
    // Base Case
    if (str.length === 1) return true;
    // if str is 2 letter then compare first and second letter
    if (str.length === 2) return str[0] === str[1];
    // recursive call compare first index with last if match remove first and last index help of slice method
    if (str[0] === str.slice(-1)) return pal(str.slice(1, -1));
    return false; // if not match reture false
}
console.log(pal("tacocat"))
console.log(pal('amanaplanacanalpanama'));