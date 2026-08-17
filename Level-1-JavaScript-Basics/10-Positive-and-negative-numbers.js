// ============================================================
// Question 8: Find Positive and Negative Numbers
// ============================================================

// Interview Question:
// Write a JavaScript function to find the positive and
// negative numbers in an array.
//
// Example:
// Input:  [10, -5, 25, -8, 15, -20]
//
// Output:
// Positive: [10, 25, 15]
// Negative: [-5, -8, -20]
//
// Input:  [-10, 5, -2, 8]
//
// Output:
// Positive: [5, 8]
// Negative: [-10, -2]
//
// Constraints:
// 1. The array can contain positive and negative numbers.
// 2. Zero should not be considered positive or negative.
// 3. Do not use filter().


// ============================================================
// Solution
// ============================================================

function findPositiveNegative(arr) {
    let positive = [];
    let negative = [];

    for(let num of arr) {
        if(num > 0) {
            positive.push(num);
        } else if (num < 0) {
            negative.push(num);
        }
    }
    return {
        positive: positive,
        negative: negative
    }
}

console.log(findPositiveNegative([10, -5, 25, -8, 15, -20]));

// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(n)
// We visit every element exactly once.
//
// Space Complexity: O(n)
// We create new arrays to store the positive
// and negative numbers.
//
// In the worst case, all elements could be stored
// in one of the arrays.


// ============================================================
// Interview Note
// ============================================================

// A good interview explanation:
//
// "I traverse the array once. If a number is greater
// than zero, I add it to the positive array. If it is
// less than zero, I add it to the negative array.
// I ignore zero because it is neither positive nor negative."
//
// Time Complexity: O(n)
// Space Complexity: O(n)