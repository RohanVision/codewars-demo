function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        default:
            return value1 / value2;
    }
}

console.log(basicOp('+', 4, 7))
console.log(basicOp('-', 15, 18))