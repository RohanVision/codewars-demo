function towerBuilder(nFloors) {
    let space, star;
    let tower = [];
    for (let i = 1; i <= nFloors; i++) {
        space = " ".repeat(nFloors - i);
        star = "*".repeat((2 * i) - 1);
        tower.push(`${space}${star}${space}`);
    }
    return tower;
}

/*
Step-by-Step Explanation:
Initialization:

space: This variable will store the spaces needed on either side of the stars for each level of the tower.
star: This variable will store the stars for each level of the tower.
tower: This is an array that will eventually contain all the levels of the tower as strings.
Loop Over Each Floor:

The for loop iterates from 1 to floors, where floors is the total number of levels (or height) of the tower.
Inside the Loop:

space = " ".repeat(floors - i):
For each level i, the number of spaces required is calculated by subtracting i from floors.
The repeat() function creates a string consisting of that many spaces.
star = "*".repeat((2*i) - 1):
The number of stars needed for each level is (2*i) - 1.
The repeat() function creates a string consisting of that many stars.
tower.push(${space}${star}${space}):
This line concatenates the spaces, stars, and spaces again to create a centered string for that level, and then pushes the string into the tower array.
Return Statement:

After the loop completes, the tower array, which now contains all the levels of the pyramid, is returned.
Example:
Let's say floors = 5. The loop will run 5 times, generating a tower with 5 levels:

Level 1 (i = 1):

space = " ".repeat(5 - 1) = " "
star = "*".repeat((2*1) - 1) = "*"
Tower array: [" * "]
Level 2 (i = 2):

space = " ".repeat(5 - 2) = " "
star = "*".repeat((2*2) - 1) = "***"
Tower array: [" * ", " *** "]
Level 3 (i = 3):

space = " ".repeat(5 - 3) = " "
star = "*".repeat((2*3) - 1) = "*****"
Tower array: [" * ", " *** ", " ***** "]
Level 4 (i = 4):

space = " ".repeat(5 - 4) = " "
star = "*".repeat((2*4) - 1) = "*******"
Tower array: [" * ", " *** ", " ***** ", " ******* "]
Level 5 (i = 5):

space = " ".repeat(5 - 5) = ""
star = "*".repeat((2*5) - 1) = "*********"
Tower array: [" * ", " *** ", " ***** ", " ******* ", "*********"]

*/