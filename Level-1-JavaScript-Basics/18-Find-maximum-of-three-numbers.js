// ============================================================
// Question 18: Find Maximum of Three Numbers
// ============================================================

// Interview Question:
// Write a JavaScript function to find the maximum
// of three numbers.
//
// Example:
// Input:  10, 25, 15
// Output: 25
//
// Input:
// 50, 30, 70
//
// Output:
// 70
//
// Constraints:
// 1. Compare three numbers.
// 2. Return the largest number.


// ============================================================
// Solution
// ============================================================

function findMaximum(a, b, c) {
    if(a > b && a > c) {
        return a;
    } else if (b > c) {
        return b;
    } else {
        return c;
    }
}

console.log(findMaximum(10, 25, 15));

// Output:
// 25

// ============================================================
// Alternative Solution: Using Math.max()
// ============================================================

function findMaximumUsingMath(a, b, c) {
    return Math.max(a, b, c);
}

console.log(findMaximumUsingMath(10, 25, 15));

// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(1)
// We always perform a fixed number of comparisons.
//
// Space Complexity: O(1)
// We use only one extra variable: maximum.


// ============================================================
// Interview Note
// ============================================================

// A good interview explanation:
//
// "I initialize maximum with the first number.
// Then I compare the second and third numbers with
// the current maximum. Whenever I find a larger number,
// I update maximum."
//
// Time Complexity: O(1)
// Space Complexity: O(1)