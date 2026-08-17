// ============================================================
// Question 10: Find the Factorial of a Number
// ============================================================

// Interview Question:
// Write a JavaScript function to find the factorial
// of a given number.
//
// Example:
// Input:  5
// Output: 120
//
// Input:  4
// Output: 24
//
// Explanation:
//
// 5! = 5 × 4 × 3 × 2 × 1
//    = 120
//
// Constraints:
// 1. The input should be a non-negative integer.
// 2. Factorial of 0 should return 1.
// 3. Use a loop to calculate the factorial.


// ============================================================
// Solution
// ============================================================

function factorial(num) {
    let result = 1;

    for(let i = num; i >= 1; i--) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));

// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(n)
// The loop runs n times.
//
// Space Complexity: O(1)
// We use only one extra variable: result.

// ============================================================
// Interview Note
// ============================================================

// A good interview explanation:
//
// "I initialize the result to 1 because multiplying by
// 1 does not change the value. Then I loop from the
// given number down to 1 and multiply each value with
// the result. This also naturally handles 0!, which is 1."
//
// Time Complexity: O(n)
// Space Complexity: O(1)