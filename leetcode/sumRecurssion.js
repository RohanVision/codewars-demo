// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false.



function sumRecursive(arr, cb) {
    if (arr.length === 0) {
        return false;
    } else {
        let res = arr.pop();
        if (cb(res) === true) return true;
        return sumRecursive(arr, cb)
    }
}