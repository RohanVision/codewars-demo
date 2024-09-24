function sumArray(arr) {
    let sum = 0;

    arr.forEach(element => {
        if (typeof element === 'number') {
            sum += element;
        }
    });
    return sum;
}
console.log(sumArray(["asdas", 2, "qweqw", 4, "cc", 6, 7]))