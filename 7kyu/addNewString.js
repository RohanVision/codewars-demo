

function addNewString(str) {
    `New! ${str}`;
    if (str.indexOf('New!') === 0) {
        return str;
    } else {
        return `New! ${str}`;
    }
}

console.log(addNewString('Hello'))
console.log(addNewString('New! Hello'))