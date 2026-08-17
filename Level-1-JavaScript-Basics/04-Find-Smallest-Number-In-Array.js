// ============================================================
// Question 4: Find the Smallest Number in an Array
// ============================================================

// Interview Question:
// Write a JavaScript function to find the smallest number
// in an array.
//
// Example:
// Input:  [10, 5, 25, 8, 15]
// Output: 5
//
// Input:  [30, 12, 45, 7, 20]
// Output: 7
//
// Constraints:
// 1. The array can contain positive numbers.
// 2. Should work with a single-element array.
// 3. Should return the smallest number.
// 4. Use Math.min().

// ============================================================
// Solution
// ============================================================
function findSmallest(arr) {
    return Math.min(...arr);
}

console.log(findSmallest([10, 5, 25, 8, 15]));

// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(n)
// Math.min() needs to check all n elements
// to find the smallest number.
//
// Space Complexity: O(n)
// The spread operator passes the array elements
// as individual arguments.

// ============================================================
// Alternative Solution: Using a Loop
// ============================================================
function findSmallestUsingLoop(arr) {
    let smallest = arr[0];
    for(let num of arr) {
        if(num < smallest) {
            smallest = num;
        }
    }
    return smallest;
}
console.log(findSmallestUsingLoop([10, 5, 25, 8, 15]));

// Both solutions have:
//
// Time Complexity: O(n)