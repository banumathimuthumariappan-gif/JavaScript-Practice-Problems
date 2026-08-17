// ============================================================
// Question 16: Check Armstrong Number
// ============================================================

// Interview Question:
// Write a JavaScript function to check whether a given
// number is an Armstrong number.
//
// Example:
// Input:  153
// Output: Armstrong Number
//
// Input:  123
// Output: Not an Armstrong Number
//
// Explanation:
//
// 153 has 3 digits.
//
// 1³ + 5³ + 3³
// = 1 + 125 + 27
// = 153
//
// Therefore, 153 is an Armstrong number.
//
// Constraints:
// 1. The number can contain multiple digits.
// 2. Use the number of digits as the power.
// 3. Do not convert the number into a string.

// ============================================================
// Solution
// ============================================================

function isArmstrong(num) {
    let original = num;
    // Count the number of digits
    let digits = 0;
    let temp = num;

    while(temp > 0) {
        digits++;
        temp = Math.floor(temp / 10);
    }

    let sum = 0;
    temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** digits;

        temp = Math.floor(temp / 10);
    }

    return sum === original;
}

console.log(isArmstrong(153));

// Output:
// true

console.log(isArmstrong(123));

// Output:
// false

// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(n)
// n = number of digits.
//
// We process each digit.
//
// Space Complexity: O(1)
// We only use a few variables.


// ============================================================
// Interview Note
// ============================================================

// A simple way to explain:
//
// "I first count the number of digits. Then I extract
// each digit using % 10, raise it to the power of the
// number of digits, and add it to the sum. Finally,
// I compare the sum with the original number."
//
// Time Complexity: O(n)
// Space Complexity: O(1)