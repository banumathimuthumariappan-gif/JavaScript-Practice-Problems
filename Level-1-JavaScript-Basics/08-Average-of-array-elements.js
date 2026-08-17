// ============================================================
// Question 9: Find the Average of Array Elements
// ============================================================

// Interview Question:
// Write a JavaScript function to find the average of
// all elements in an array.
//
// Example:
// Input:  [10, 20, 30, 40, 50]
// Output: 30
//
// Input:  [5, 10, 15]
// Output: 10
//
// Constraints:
// 1. The array can contain positive or negative numbers.
// 2. Should work with an array containing multiple numbers.
// 3. Do not use the built-in reduce() method.


// ============================================================
// Solution
// ============================================================

function findAverage(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

console.log(findAverage([10, 20, 30, 40, 50]));

// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(n)
// We visit every element once to calculate the sum.
//
// Space Complexity: O(1)
// We only use one extra variable: `sum`.

// ============================================================
// Alternative Solution: Using reduce()
// ============================================================

function findAverageUsingReduce(arr) { 
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

console.log(findAverageUsingReduce([10, 20, 30, 40, 50]));

