function freq(arr) {
    let freq = {};
    arr.forEach((element) => {
        if (freq.hasOwnProperty(element)) {
            freq[element]++;
        } else {
            freq[element] = 1;
        }
    })
    let ans = Object.keys(freq).reduce((acc, curr) => {
        return freq[acc] > freq[curr] ? acc : curr;
    })
    return ans;
}


console.log(freq([1, 223, 3, 121, 121, 11, 3, 1]))