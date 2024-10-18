

function sumRange(num) {
    if (n === 1) return 1;
    return num + sumRange(num - 1)
}