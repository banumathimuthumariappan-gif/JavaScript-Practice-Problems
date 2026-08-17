// ============================================================
// Question 2: Check Palindrome
// ============================================================

// Interview Question:
// Write a JavaScript function to check whether a string is
// a palindrome.
//
// A palindrome is a string that reads the same forward and backward.
//
// Examples:
// "madam"   → true
// "level"   → true
// "racecar" → true
// "hello"   → false


// ============================================================
// Solution — Using Two Pointers ⭐
// ============================================================
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while(left < right) {
        if(str[left] != str[right]) {
            return false;
        }
        left ++;
        right --;
    }
    return true;
}

console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("level"));   // true
console.log(isPalindrome("racecar")); // true

// ============================================================
// Approach
// ============================================================

// We use two pointers:
//
// left  → starts from the beginning
// right → starts from the end
//
// Compare both characters.
//
// If they are different:
//     → It is NOT a palindrome
//     → Return false
//
// If they are the same:
//     → Move left forward
//     → Move right backward
//
// Continue until the pointers meet.
//
// If all characters match:
//     → Return true


// ============================================================
// Explanation
// ============================================================

// Example: "madam"
//
// Index:   0   1   2   3   4
//          m   a   d   a   m
//          ↑               ↑
//        left             right
//
// Step 1:
// str[0] === str[4]
// 'm' === 'm'  → Match
//
// Move pointers:
//
//          m   a   d   a   m
//              ↑       ↑
//            left     right
//
// Step 2:
// str[1] === str[3]
// 'a' === 'a'  → Match
//
// Move pointers:
//
//          m   a   d   a   m
//                  ↑
//               left/right
//
// The pointers meet, so every character matched.
//
// Result → true


// ============================================================
// Why Two Pointers?
// ============================================================

// We don't need to create another reversed string.
//
// Instead, we directly compare:
//     First  ↔ Last
//     Second ↔ Second-last
//     Third  ↔ Third-last
//
// This makes the solution memory efficient.


// ============================================================
// Time Complexity
// ============================================================

// Time Complexity: O(n)
//
// We compare characters while moving toward the middle.
//
// Space Complexity: O(1)
//
// Only two variables (left and right) are used.
// No additional string or array is created.


// ============================================================
// Interview Explanation
// ============================================================

// "I use a two-pointer approach. One pointer starts from the
// beginning and the other starts from the end. I compare the
// characters at both positions. If they don't match, I
// immediately return false. Otherwise, I move both pointers
// toward the center. If all characters match, I return true."