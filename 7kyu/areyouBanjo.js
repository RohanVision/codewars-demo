// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    for (let i = 0; i < name.length; i++) {
        if (name.indexOf('R', 0) && name.indexOf('r', 0)) {
            return `${name} does not play banjo`;
        } else {
            return `${name} plays banjo`
        }
    }
}


console.log(areYouPlayingBanjo("Adam"))
console.log(areYouPlayingBanjo("Ringo")) 