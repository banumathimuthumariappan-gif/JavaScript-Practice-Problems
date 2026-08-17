// ============================================================
// Question 9: Count Even and Odd Numbers in an Array
// ============================================================

// Interview Question:
// Write a JavaScript function to count the number of
// even and odd numbers in an array.
//
// Example:
// Input:  [10, 5, 25, 8, 15, 20]
// Output:
// Even: 3
// Odd: 3
//
// Input:  [1, 2, 3, 4, 5]
// Output:
// Even: 2
// Odd: 3
//
// Constraints:
// 1. The array can contain positive or negative numbers.
// 2. Should work with an empty array.
// 3. Use the modulus (%) operator to check even and odd numbers.


// ============================================================
// Solution
// ============================================================

function countEvenOdd(arr) {
    let oddCount = 0;
    let evenCount = 0;

    for(let num of arr) {
        if(num % 2 == 0) {
            evenCount ++;
        } else {
            oddCount ++;
        }
    }
    return {
        even: evenCount,
        odd: oddCount
    };
}

console.log(countEvenOdd([10, 5, 25, 8, 15, 20]));

// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(n)
// We visit every element exactly once.
//
// Space Complexity: O(1)
// We only use two counter variables:
// evenCount and oddCount.


// ============================================================
// Interview Note
// ============================================================

// A good interview explanation:
//
// "I traverse the array once and use the modulus operator
// to determine whether each number is even or odd.
// If num % 2 is 0, I increment the even counter;
// otherwise, I increment the odd counter."
//
// Time Complexity: O(n)
// Space Complexity: O(1)