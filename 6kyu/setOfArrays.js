function arrSet(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))]
}
console.log(arrSet([1, 2, 3, 5, 4, 1], [4, 2, 1, 6, 7, 4, 8]));