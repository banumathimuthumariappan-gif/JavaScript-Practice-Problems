// ============================================================
// Question 11: Swap Two Numbers
// ============================================================

// Interview Question:
// Write a JavaScript program to swap two numbers
// without using a third variable.
//
// Example:
// Input:
// a = 10
// b = 20
//
// Output:
// a = 20
// b = 10
//
// Constraints:
// 1. Swap the values of two variables.
// 2. Do not use a third variable.
// 3. Use JavaScript destructuring assignment.

// ============================================================
// Solution
// ============================================================

let a = 10;
let b = 20;

[b, a] = [a, b];

console.log("a: ", a);
console.log("b: ", b);

// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(1)
// Only a fixed number of operations are performed.
//
// Space Complexity: O(1)
// No additional variable is explicitly created.

// ============================================================
// Alternative Solution: Using a Temporary Variable
// ============================================================

let x = 10;
let y = 20;

let temp = x;
x = y;
y = temp;

console.log("x: " + x);
console.log("y: " + y);
