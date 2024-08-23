// Write a program to find out which one is nearest to 100

function closestTo100(a, b) {
    if ((100 - a) < (100 - b)) {
        return a;
    } else {
        return b;
    }
}

console.log(closestTo100(99, 1));