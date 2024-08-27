// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    let upperText = text.toUpperCase();
    const arr = upperText.split('').map((char) => char.charCodeAt());
    const newArr = arr.filter(num => {
        if (num > 64 && num < 91) {
            return num;
        }
    });
    const updateArr = newArr.map((n) => n - 64);
    return updateArr.join(' ');
}


console.log(alphabetPosition("The sunset sets at twelve o' clock."))