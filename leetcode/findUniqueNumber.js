
function countUniqueValues(arr) {
    let obj = {};
    for (let key of arr) {
        obj[key] = (obj[key] || 0) + 1
    }
    return Object.keys(obj).length;
}


// second approach
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log(countUniqueValues([]))
