// ============================================================
// Question 3: Find Largest Number in an Array
// ============================================================

// Interview Question:
// Write a JavaScript function to find the largest number
// in an array.
//
// Example:
// Input:  [10, 5, 25, 8, 15]
// Output: 25


// ============================================================
// Solution ⭐
// ============================================================

function findLargest(arr) {
    let largest = arr[0];
    for(let num of arr) {
        if(num > largest) {
            largest = num;
        }
    }
    return largest;
}

console.log(findLargest([10, 5, 25, 8, 15])); // 25

// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(n)
//
// We visit every element once.
//
// Space Complexity: O(1)
//
// We only use one extra variable: `largest`.


// ============================================================
// Interview Explanation
// ============================================================

// "I initialize the largest value with the first element of
// the array. Then I iterate through the remaining elements.
// If the current element is greater than the current largest,
// I update the largest value. After completing the loop,
// I return the largest value."

// ============================================================
// Solution 2 ⭐
// ============================================================
function largestNumber(arr) {
    return Math.max(...arr);
}

console.log(largestNumber([10, 5, 25, 8, 15])); // 25