// Write a program to find out which one is nearest to 100

function closestTo100(a, b) {
    if (Math.abs((100 - a)) < Math.abs((100 - b))) {
        return a;
    } else {
        return b;
    }
}

console.log(closestTo100(99, 1));
console.log(closestTo100(150, 120));