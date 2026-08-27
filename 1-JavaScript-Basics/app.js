// 1. Reverse a String


// 2. Palindrome


// 3. Find factorial of a number


// Recursive approach
// function findFactorial1(num) {
//     if(num === 0 || num === 1) {
//         return 1;
//     }
//     return findFactorial1(num) * findFactorial1(num - 1);
// }

// console.log(findFactorial1(5));

// 4. Generate Fibonocci series








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

// 9. Reverse a number
// Using built in methods
function reverse(num) {
    return Math.abs(num).toString().split("").reverse().join("");
}
console.log(reverse(12345));

