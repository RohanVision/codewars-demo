
// First Solution

// const descendingOrder = (a) => Number([...("" + a)].sort().reverse().join(""));


// Second solution
const descendingOrder = (a) => {
    // Step 1: Convert the number to a string, then to an array of digits
    let digits = ("" + a).split('');

    // Step 2: Sort the array of digits in descending order using a for loop
    for (let i = 0; i < digits.length; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            if (digits[i] < digits[j]) {
                // Swap the elements if the current element is smaller than the next element
                [digits[i], digits[j]] = [digits[j], digits[i]];
            }
        }
    }

    // Step 3: Join the sorted array back into a single string
    let sortedString = digits.join('');

    // Step 4: Convert the string back to a number and return it
    return Number(sortedString);
};

// Test the function
console.log(descendingOrder(1234));      // Output: 4321
console.log(descendingOrder(145263));    // Output: 654321
console.log(descendingOrder(9876543210)); // Output: 9876543210