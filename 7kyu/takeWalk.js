// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

// Quesions Break into pseudo code 

// It's often hard to dive straight into code, so I pseudo-code instead:

// 1 block = 1 minute
// if walk = 10 minutes, true otherwise false
// must return to starting point
// if paths start with 0 (set equal to 0) we can increment or decrement
// then, if a path ends again with 0, we know it can return true


//The idea is forming, now let's get closer to code with the details:

// ns (north-south) should equal 0
// we (west-east) should equal 0
// if the direction is north, north-south add 1 - leaving
// if the direction is south, north-south subtract 1 - coming back
// if the direction is west, west-east add 1 - leaving
// if the direction is east, west-east subtract 1 - coming back

// if the length of the walk is equal to 10 and ns is 0 and we is 0, return the walk l

// function isValidWalk(walk) {
//     let ns = 0; let we = 0;
//     for (let dir of walk) {
//         if (dir == "n") ns += 1;
//         if (dir == "s") ns -= 1;
//         if (dir == "w") we += 1;
//         if (dir == "e") we -= 1;
//     }

//     return walk.length == 10 && ns === 0 && we === 0;
// }


function isValidWalk(walk) {
    let ns = 0; let we = 0;

    for (let dir of walk) {
        if (dir == 'n') ns += 1;
        if (dir == 's') ns -= 1;
        if (dir == 'w') we += 1;
        if (dir == 'e') we -= 1
    }

    return walk.length == 10 && ns === 0 && we === 0;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))