function findEvenIndex(arr) {
    let sum = 0, leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }


    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i];

        if (leftSum === sum) {
            return i;
        }
        leftSum += arr[i]
    }
    return -1

}

// second solution
function findEvenIndex(arr) {
    var left = 0, right = arr.reduce(function (pv, cv) {
        return pv + cv;
    }, 0);

    for (var i = 0; i < arr.length; i++) {
        if (i > 0)
            left += arr[i - 1];
        right -= arr[i];

        if (left == right) return i;
    }

    return -1;
}