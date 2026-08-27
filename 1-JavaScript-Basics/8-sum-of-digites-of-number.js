// 8. Find the sum of the digits of a number
// By converting to string
function sumOfDigits(num) {
    return Math.abs(num).toString().split("").reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(sumOfDigits(12345));

// Without converting to string
function sumOfDigits1(num) {
    let sum = 0;
    num = Math.abs(num);

    while(num > 0) {
        sum += num % 10;
        sum = Math.floor(sum / 10);
    }
    return sum;
}

console.log(sumOfDigits1(12345));