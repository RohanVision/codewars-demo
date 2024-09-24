function strPalidrom(str) {
    let reversed = str.split("").reverse().join("");
    return reversed === str ? true : false;
}
console.log(strPalidrom("lol"));
console.log(strPalidrom("loc"));