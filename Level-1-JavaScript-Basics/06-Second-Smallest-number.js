// ============================================================
// Question 4: Find the Second Smallest Number in an Array
// ============================================================

// Interview Question:
// Write a JavaScript function to find the second smallest
// number in an array.
//
// Example:
// Input:  [10, 5, 25, 8, 15]
// Output: 8
//
// Input:  [30, 12, 45, 7, 20]
// Output: 12
//
// Constraints:
// 1. The array should contain at least two numbers.
// 2. Should find the second smallest number.
// 3. Do not use the built-in sort() method.
// 4. Should handle duplicate values properly.


// ============================================================
// Solution
// ============================================================

function findSecondSmallest(arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for(let num of arr) {
        if(num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num > smallest) {
            secondSmallest = num;
        }
    }
    return secondSmallest;
}

console.log(findSecondSmallest([10, 5, 25, 8, 15]));

// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(n)
// We traverse the array only once.
//
// Space Complexity: O(1)
// We use only two variables:
// smallest and secondSmallest.


// ============================================================
// Interview Note
// ============================================================

// For finding the second smallest:
//
// smallest = Infinity
// secondSmallest = Infinity
//
// For finding the second largest:
//
// largest = -Infinity
// secondLargest = -Infinity
//
// The important difference is:
//
// Smallest  -> Infinity
// Largest   -> -Infinity
//
// This approach avoids sorting the array and
// solves the problem in O(n) time.