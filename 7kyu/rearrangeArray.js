

function swapping(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function swap(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (i <= j) {
        if (arr[i] == 1) {
            swapping(arr, i, j)
            j--;
        } else {
            i++
        }
    }
    return arr
}

let arr = [0, 1, 1, 1, 0, 1, 0, 0, 0]
swap(arr)
console.log(arr)