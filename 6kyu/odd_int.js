function findOdd(arr) {
    let occ = {}
    arr.forEach(function (el) {
        occ[el] ? occ[el]++ : occ[el] = 1;
    });

    for (prop in occ) {
        if (occ[prop] % 2 !== 0) return Number(prop)
    }
}
// 1 hour agoRefactorDiscuss
function findOdd(A) {
    let count = 0;
    let arr = A.sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++
            }
        }
        if (count % 2 !== 0) {
            return arr[i]
        }
    }
}