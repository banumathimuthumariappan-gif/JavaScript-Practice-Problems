// ============================================================
// Question 1: Reverse a String
// ============================================================

// Interview Question:
// Write a JavaScript function to reverse a string without
// using the built-in reverse() method.

// Example:
// Input:  "hello"
// Output: "olleh"

// Input:  "Angular"
// Output: "ralugnA"

// Constraints:
// 1. Don't use String.prototype.reverse()
// 2. Should work with an empty string
// 3. Should work with a single-character string


// ============================================================
// Solution
function reverseString(str) {
    let result = '';
    for(let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log(reverseString("hello"));

// ============================================================
// Explanation
// ============================================================

// `str.length - 1` gives us the index of the last character.
//
// For "hello":
//
// str.length = 5
// Last index = 5 - 1 = 4
//
// The loop:
//
// for (let i = str.length - 1; i >= 0; i--)
//
// starts from index 4 and moves backwards:
//
// 4 → 3 → 2 → 1 → 0
//
// At every iteration:
//
// reversed += str[i]
//
// adds the current character to the result.
//
// This approach does not use the built-in reverse() method.


// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(n)
// We visit every character once.
//
// Space Complexity: O(n)
// We create a new string to store the reversed result.

function reverseStringSimple(str) {
    return str.split('').reverse().join('');
}

console.log(reverseStringSimple("hello"));
