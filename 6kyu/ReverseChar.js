// Concept of Split(" "); => it will split based on space between words and make it Array["Rohan", "Amberkar"]
// if we use split("") => now it will split by charcter => ["R", "o", "H", "A", N]


let str = "Rohan Bhalchandra Amberkar";

let strArray = str.split(" ").map((word) => {
    return word.split("").reverse().join("")
});
console.log(strArray.join(" "));
