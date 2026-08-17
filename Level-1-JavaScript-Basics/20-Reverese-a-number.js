// ============================================================
// Question 20: Reverse a Number
// ============================================================

// Interview Question:
// Write a JavaScript function to reverse a given number.
//
// Example:
// Input:  12345
// Output: 54321
//
// Input:  789
// Output: 987
//
// Input:  120
// Output: 21
//
// Constraints:
// 1. Do not convert the number into a string.
// 2. Use mathematical operations to reverse the number.
// 3. Should work with numbers ending in zero.


// ============================================================
// Solution
// ============================================================

function reverseNumber(num) {
    let reversed = 0;

    while(num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;

        num = Math.floor(num / 10);
    }

    return reversed;
}

console.log(reverseNumber(12345));

// Output:
// 54321

// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(n)
// n = number of digits.
//
// We process every digit once.
//
// Space Complexity: O(1)
// We use only a few variables.


// ============================================================
// Interview Note
// ============================================================

// A good interview explanation:
//
// "I extract the last digit using % 10, add it to the
// reversed number, and remove the last digit using
// Math.floor(num / 10). I repeat this until the number
// becomes 0."
//
// Time Complexity: O(n)
// Space Complexity: O(1)
