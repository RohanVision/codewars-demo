function addBinary(a, b) {
    return (a + b).toString(2)
}



function convertDecimalToBinary(decimalNumber) {
    if (decimalNumber === 0) {
        // Base case: Return "0" if the number is 0
        return "0";
    } else {
        // Recursive case: Divide the number by 2, 
        //append the remainder to the result of the recursive call
        return convertDecimalToBinary(
            Math.floor(decimalNumber / 2)) + (decimalNumber % 2);

    }
}

const num1 = 10;
const result = convertDecimalToBinary(num1);
console.log(result);