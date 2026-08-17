// ============================================================
// Question 17: Find Maximum of Two Numbers
// ============================================================

// Interview Question:
// Write a JavaScript function to find the maximum
// of two numbers.
//
// Example:
// Input:  10, 20
// Output: 20
//
// Input:  50, 30
// Output: 50
//
// Constraints:
// 1. Compare two numbers.
// 2. Return the larger number.


// ============================================================
// Solution
// ============================================================

function findMaximum(a, b) {
    if(a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(findMaximum(10, 20));


// ============================================================
// Alternative Solution: Using Math.max()
// ============================================================

function findMaximumUsingMath(a, b) {
    return Math.max(a,b);
}

console.log(findMaximumUsingMath(10, 20));

// Output:
// 20


// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(1)
// We only compare two numbers.
//
// Space Complexity: O(1)
// No additional space is required.


// ============================================================
// Interview Note
// ============================================================

// A good interview explanation:
//
// "I compare the two numbers using an if-else condition.
// If a is greater than b, I return a; otherwise,
// I return b."
//
// Time Complexity: O(1)
// Space Complexity: O(1)