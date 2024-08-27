// t's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.



// The slice() method extracts a part of a string.

// The slice() method returns the extracted part in a new string.

// The slice() method does not change the original string.

// The start and end parameters specifies the part of the string to extract.

function removeChar(str) {
    let splitS = str.split('')
    console.log(splitS.pop())
    console.log(splitS.shift())
    return splitS.join('')
};
console.log(removeChar('eloquent'))

function removeChar(str) {
    return str.slice(1, -1);
}