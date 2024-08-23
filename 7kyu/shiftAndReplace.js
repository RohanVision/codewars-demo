

const shiftReplace = (str) =>
    str.split("")
        .map((s) => String.fromCharCode(s.charCodeAt(0) + 1))
        .join("");

console.log(shiftReplace("abcd"))