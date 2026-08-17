// ============================================================
// Question 19: Count Digits in a Number
// ============================================================

// Interview Question:
// Write a JavaScript function to count the number of
// digits in a given number.
//
// Example:
// Input:  12345
// Output: 5
//
// Input:  789
// Output: 3
//
// Input:  0
// Output: 1
//
// Constraints:
// 1. Should work with positive numbers.
// 2. 0 should be considered as having 1 digit.
// 3. Do not convert the number into a string.

// ============================================================
// Solution
// ============================================================

function countDigits(num) {
    if(num == 0) {
        return 1;
    }

    let count = 0;
    while(num > 0) {
        count ++;

        num = Math.floor(num / 10);
    }
    return count;
}

console.log(countDigits(12345));

// Output:
// 5

// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(n)
// n = number of digits.
//
// We process each digit once.
//
// Space Complexity: O(1)
// We use only one extra variable: count.


// ============================================================
// Interview Note
// ============================================================

// A good interview explanation:
//
// "I repeatedly divide the number by 10 and use
// Math.floor() to remove the last digit. For every
// division, I increment the count. When the number
// becomes 0, the count represents the number of digits."
//
// Time Complexity: O(n)
// Space Complexity: O(1)