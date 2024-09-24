// Array.isArray() method check the given element is array or not

function checkArray(element) {
    return Array.isArray(element);
}

console.log(checkArray([])); // true
console.log(checkArray({})); // false