// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.


// function longest(s1, s2) {
//     return [...new Set(s1 + s2)].sort().join('')
// }


// second approach from Scratch 

function longest(s1, s2) {
    let combined = s1 + s2;


    let uniqueArr = [];
    for (let i = 0; i < combined.length; i++) {
        if (uniqueArr.indexOf(combined[i]) === -1) { // if char is not present in uniqueArr (using indexOf())
            uniqueArr.push(combined[i]) // push the char in uniqueArr
        }
    }

    // using bubble sort for sorting the charcters (O(n^2))
    for (let i = 0; i < uniqueArr.length - 1; i++) {
        for (let j = 0; j < uniqueArr.length - 1 - i; j++) {
            if (uniqueArr[j] > uniqueArr[j + 1]) {
                let temp = uniqueArr[j];
                uniqueArr[j] = uniqueArr[j + 1]
                uniqueArr[j + 1] = temp;
            }
        }
    }

    // manually join the result
    let result = '';
    for (let i = 0; i < uniqueArr.length; i++) {
        result += uniqueArr[i];
    }
    return result;
}

console.log(longest('aretheyhere', 'yestheyarehere')); 