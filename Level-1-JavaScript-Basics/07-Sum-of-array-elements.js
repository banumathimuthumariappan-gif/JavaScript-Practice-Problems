// ============================================================
// Question 7: Find the Sum of Array Elements
// ============================================================

// Interview Question:
// Write a JavaScript function to find the sum of all
// elements in an array.
//
// Example:
// Input:  [10, 5, 25, 8, 15]
// Output: 63
//
// Input:  [1, 2, 3, 4, 5]
// Output: 15
//
// Constraints:
// 1. The array can contain positive or negative numbers.
// 2. Should work with an empty array.
// 3. Do not use the built-in reduce() method.


// ============================================================
// Solution
// ============================================================

function findSum(arr) {
    let sum = 0;

    for(let num of arr) {
        sum += num;
    }

    return sum;
}

console.log(findSum([10, 5, 25, 8, 15]));

// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(n)
// We visit every element exactly once.
//
// Space Complexity: O(1)
// We only use one extra variable: `sum`.

// ============================================================
// Alternative Solution: Using reduce()
// ============================================================

function findSumUsingReduce(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(findSumUsingReduce([10, 5, 25, 8, 15]));

// ============================================================
// Interview Note
// ============================================================

// The loop solution is easy to explain in an interview:
//
// "I initialize sum to 0 and traverse the array once.
// For every element, I add it to sum. Finally,
// I return the sum."
//
// Time Complexity: O(n)
// Space Complexity: O(1)