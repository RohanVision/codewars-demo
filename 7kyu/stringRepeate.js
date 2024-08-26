// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr(n, s) {
    return s.repeat(n)
}
console.log(repeatStr(3, "*"));


function repeatStr(n, s) {
    let strTotal = "";
    for (let i = 0; i < n; i++) {
        strTotal += s;
    }
    return strTotal;
}
console.log(repeatStr(3, "*"));