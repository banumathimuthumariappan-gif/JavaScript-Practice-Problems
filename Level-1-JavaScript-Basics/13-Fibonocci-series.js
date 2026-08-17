// ============================================================
// Question 11: Fibonacci Series
// ============================================================

// Interview Question:
// Write a JavaScript function to generate the Fibonacci
// series for a given number of terms.
//
// Example:
// Input:  7
// Output: 0 1 1 2 3 5 8
//
// Input:  5
// Output: 0 1 1 2 3
//
// Constraints:
// 1. The first two Fibonacci numbers are 0 and 1.
// 2. Each next number is the sum of the previous two numbers.
// 3. Use a loop to generate the series.


// ============================================================
// Solution
// ============================================================

function fibonacci(n) {
    let first = 0;
    let second = 1;

    let result = [];

    for(let i = 0; i < n; i++) {
        result.push(first);

        let next = first + second;

        first = second;
        second = next;
    }
    return result;
}

console.log(fibonacci(7));

// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(n)
// The loop runs n times.
//
// Space Complexity: O(n)
// We store n Fibonacci numbers in the result array.


// ============================================================
// Interview Note
// ============================================================

// A good interview explanation:
//
// "I initialize two variables with 0 and 1.
// In every iteration, I add the current first value
// to the result, calculate the next value by adding
// first and second, and then move both variables forward."
//
// Time Complexity: O(n)
// Space Complexity: O(n)