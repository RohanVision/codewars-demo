function makeNegative(num) {
    if (num === -num) {
        return num;
    } else {
        return -Math.abs(num);
    }
}

console.log(makeNegative(-4));


function makeNegative(num) {
    return -Math.abs(num);
}

console.log(makeNegative(-4));


