// ============================================================
// Question 15: Find Prime Numbers in an Array
// ============================================================

// Interview Question:
// Write a JavaScript function to find all the prime numbers
// present in an array.
//
// Example:
// Input:  [10, 3, 5, 8, 11, 15, 17]
//
// Output:
// [3, 5, 11, 17]
//
// Input:  [2, 4, 7, 9, 13]
//
// Output:
// [2, 7, 13]
//
// Constraints:
// 1. A prime number should be greater than 1.
// 2. A prime number has exactly two factors:
//    1 and itself.
// 3. Do not use filter().
// 4. Check each number using prime-number logic.


// ============================================================
// Solution
// ============================================================

function findPrimeNumbers(arr) {
    let result = [];

    for(let num of arr) {
        let isPrime = true;
        if(num <= 1) {
            isPrime = false;
        }

        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if(isPrime) {
            result.push(num);
        }
    }
    return result;
}

console.log(findPrimeNumbers([10, 3, 5, 8, 11, 15, 17]));

// Output:
// [3, 5, 11, 17]

// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(n√m)
//
// n = number of elements in the array
// m = largest number in the array
//
// For every array element, we may check up to
// its square root.
//
// Space Complexity: O(n)
//
// We create a new array to store the prime numbers.
// In the worst case, every element could be prime.


// ============================================================
// Interview Note
// ============================================================

// A good interview explanation:
//
// "I traverse the array and check every number for
// primality. For each number, I check divisibility only
// up to its square root. If it is prime, I add it to
// a result array."
//
// Time Complexity: O(n√m)
// Space Complexity: O(n)