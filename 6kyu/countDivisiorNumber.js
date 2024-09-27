function getDivisorsCnt(n) {
    let count = 0;

    // Loop through numbers from 1 to the square root of 'n'
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) { // Check if 'i' is a divisor of 'n'
            count += 2; // Count both 'i' and 'n/i' as divisors
            if (i === n / i) { // If 'i' and 'n/i' are the same (perfect square)
                count--; // Don't double count the same divisor
            }
        }
    }

    return count; // Return the total count of divisors
}
// bit tricky when goes big test