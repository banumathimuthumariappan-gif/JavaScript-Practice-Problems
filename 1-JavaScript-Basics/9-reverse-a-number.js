// 9. Reverse a number
// Using built in methods
function reverse(num) {
    return Math.abs(num).toString().split("").reverse().join("");
}
console.log(reverse(12345));

// Without built in methods
function reverse1(num) {
    let result = 0;
    
    while(num > 0) {
        let digit = num % 10;
        result = result * 10 + digit;

        num = Math.floor(num / 10);
    }
    return result;
}
console.log(reverse1(12345));