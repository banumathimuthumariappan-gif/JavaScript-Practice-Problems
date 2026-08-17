// ============================================================
// Question 12: Check Prime Number
// ============================================================

// Interview Question:
// Write a JavaScript function to check whether a given
// number is a prime number.
//
// Example:
// Input:  7
// Output: Prime
//
// Input:  10
// Output: Not Prime
//
// Constraints:
// 1. A prime number should be greater than 1.
// 2. A prime number has exactly two factors:
//    1 and itself.
// 3. Use a loop to check whether the number has
//    any other factors.


// ============================================================
// Solution
// ============================================================

function isPrime(num) {
    if(num <= 1) {
        return false;
    }
    for(let i = 2; i < Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(101));

// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(√n)
// We check divisors only up to the square root of num.
//
// Space Complexity: O(1)
// We use only one extra variable: i.


// ============================================================
// Interview Note
// ============================================================

// A good interview explanation:
//
// "First, I check if the number is less than or equal to 1,
// because those numbers are not prime. Then I check whether
// the number is divisible by any value from 2 up to its
// square root. If I find a divisor, I return false.
// Otherwise, the number is prime and I return true."
//
// Time Complexity: O(√n)
// Space Complexity: O(1)