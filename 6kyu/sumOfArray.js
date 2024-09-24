

function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6, 7]));

// second approach
function sumArray(arr) {
    let sum = 0;

    arr.forEach(element => {
        sum += element
    });
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6, 7]))