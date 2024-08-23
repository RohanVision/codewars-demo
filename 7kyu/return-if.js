
function sumOf(a, b) {
    if (a === 100 || b === 100 || a + b === 100) {
        return true;
    } else {
        return false;
    }
}

console.log(sumOf(100, 9));
console.log(sumOf(5, 100));
console.log(sumOf(10, 9));