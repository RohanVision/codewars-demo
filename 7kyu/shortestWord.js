// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s) {
    let arr = s.split(' ');
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < smallest.length) {
            smallest = arr[i];
        }
    }
    return smallest.length;
}


function findShort(s) {
    return Math.min(...s.split(" ").map(element => element.length))
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("turns out random test cases are easier than writing out basic ones"));
console.log(findShort("lets talk about javascript the best language"));
console.log(findShort("i want to travel the world writing code one day"));
console.log(findShort("Lets all go on holiday somewhere very cold"));
console.log(findShort("Test where final word shortest see"));
console.log(findShort("Let's travel abroad shall we"));