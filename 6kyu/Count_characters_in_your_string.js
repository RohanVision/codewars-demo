// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.




function count(string) {
    let occ = {};
    string.split('').forEach((s) => {
        occ[s] ? occ[s]++ : occ[s] = 1;
    })
    return occ;
}


function count(string) {
    let occ = {};
    string.toLowerCase();
    string.split("").forEach((element) => {
        if (occ.hasOwnProperty(element) === false) {
            return occ[element] = 1
        } else {
            occ[element]++;
        }
    })
    return occ;
}