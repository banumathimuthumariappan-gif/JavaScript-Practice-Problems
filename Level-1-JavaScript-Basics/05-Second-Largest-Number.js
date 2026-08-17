// ============================================================
// Question 3: Find the Second Largest Number in an Array
// ============================================================

// Interview Question:
// Write a JavaScript function to find the second largest
// number in an array.
//
// Example:
// Input:  [10, 5, 25, 8, 15]
// Output: 15
//
// Input:  [30, 12, 45, 7, 20]
// Output: 30
//
// Constraints:
// 1. The array should contain at least two numbers.
// 2. Should find the second largest number.
// 3. Do not use the built-in sort() method.
// 4. Should handle duplicate values properly.
//
//
// ============================================================
// Solution
// ============================================================
function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = Infinity;

    for(let num of arr) {
        if(num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }
    return secondLargest;
}

console.log(findSecondLargest([10, 5, 25, 8, 15]));

// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(n)
// We traverse the array only once.
//
// Space Complexity: O(1)
// We use only two variables:
// largest and secondLargest.
//
// This is better than sorting because we don't need
// to sort the entire array.


// ============================================================
// Interview Note
// ============================================================

// A good interview explanation:
//
// "I maintain two variables, largest and secondLargest.
// I traverse the array once. Whenever I find a number
// greater than the current largest, I move the largest
// value to secondLargest and update largest.
// Otherwise, if the number is between largest and
// secondLargest, I update secondLargest."
//
// Time Complexity: O(n)
// Space Complexity: O(1)