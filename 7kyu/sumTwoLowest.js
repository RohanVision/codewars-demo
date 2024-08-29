function sumTwoSmallestNumbers(numbers) {
    let result = numbers.sort((a, b) => a - b).slice(0, 2)

    const sum = result.reduce(function (acc, curr) {
        return acc += curr
    })
    return sum;
}

//Short Approach

function sumTwoSmallestNumbers(numbers) {
    numbers = numbers.sort(function (a, b) { return a - b; });
    return numbers[0] + numbers[1];
};

sumTwoSmallestNumbers([5, 8, 12, 19, 22])