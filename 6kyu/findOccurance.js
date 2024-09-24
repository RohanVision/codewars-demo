

function occurance(str) {
    let occ = {};
    str.toLowerCase()
    str.split("").forEach(function (element) {
        if (occ.hasOwnProperty(element) === false) {
            return occ[element] = 1;
        } else {
            occ[element]++;
        }
    })
    return occ;
}

console.log(occurance("AaApple"));