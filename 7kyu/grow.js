function grow(x) {
    x.reduce((acc, curr) => acc * curr);
}

// function grow(x) {
//     let sum = 1;
//     for (let i = 0; i < x.length; i++) {
//         sum = sum * x[i];
//     }
//     return sum;
// }

console.log(grow([1, 2, 3]))