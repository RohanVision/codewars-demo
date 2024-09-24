


function reverseNumber(num) {
    let rev = 0;
    while (num > 0) {
        let rem = num % 10; // 123 --- give last digit
        console.log(rem)
        rev = rev * 10 + rem; // 0 * 10 + 4 = 4
        num = Math.floor(num / 10); // 123.4 -- will give left side interger
    }
    return rev;
}
console.log(reverseNumber(1234));