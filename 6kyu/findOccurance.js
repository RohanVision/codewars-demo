

// function occurance(str) {
//     let occ = {};
//     str.toLowerCase()
//     str.split("").forEach(function (element) {
//         if (occ.hasOwnProperty(element) === false) {
//             return occ[element] = 1;
//         } else {
//             occ[element]++;
//         }
//     })
//     return occ;
// }


let str = "AaApple"
let freqMap = {}
for (const char of str) {
    if (freqMap[char]) {
        // if present we will update it (we cant do it by freqMap.char)
        freqMap[char] += 1;
    } else {
        // if not present we will added
        freqMap[char] = 1;
    }
}
console.log(freqMap)

// console.log(occurance("AaApple"));