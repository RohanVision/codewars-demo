// How It Works:
// Filter Method:

// The filter method is used to create a new array containing only the sub-tickets that are "winning."
// A sub-ticket is considered a "win" if any character in the string has an ASCII value that matches the given number.
// Determining the Result:

// After filtering, the length of the wins array is compared to the win threshold.
// If the number of winning sub-tickets is equal to or greater than win, the function returns "Winner!"; otherwise, it returns "Loser!".
// Key Points:
// Filter: This method simplifies the counting process by directly filtering out the winning sub-tickets.
// Some: The some method checks if at least one character in the string matches the condition.



/* Time complexity O(n * m) => the outer loop run N number of times and inner loop run on each SubArray M times
    n * m = 
    n = inner loop iterate 3 times
    m = outer loop iterate 3 + 3 + 4 = 10
 */

function bingo(ticket, win) {
    let mini_value = 0;

    for (let i = 0; i < ticket.length; i++) {
        let [str, num] = ticket[i];

        for (let k = 0; k < str.length; k++) {
            if (str.charCodeAt(k) === num) {
                mini_value++;
                break;
            }
        }
    }
    return mini_value >= win ? "Winner!" : "Loser!"
}




function bingo(ticket, win) {
    const wins = ticket.filter(([string, number]) =>
        string.split('').some(char => char.charCodeAt(0) === number)
    );
    return wins.length >= win ? "Winner!" : "Loser!"
}


// solution 2

function bingo(ticket, win) {
    if (ticket.filter(string =>
        string[0].split('')
            .some(char => char.charCodeAt(0) == string[1])).length >= win) {
        return 'Winner!'
    } else {
        return 'Loser!'
    }
}