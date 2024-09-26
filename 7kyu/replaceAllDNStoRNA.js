function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}


function DNAtoRNA(dna) {
    return dna.replaceAll('T', 'U');
}

console.log(DNAtoRNA("TTTT")) // => UUUU