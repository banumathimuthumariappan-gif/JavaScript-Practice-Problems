// Using built in methods
function isPalindrome(str) {
    return str.split("").reverse().join("") === str;
}
console.log(isPalindrome("madam"));

// Without using built in methods
function isPalindrome1(str) {
    let reversed = '';
    for(let i = str.length - 1; i>= 0; i--) {
        reversed += str[i];
    }
    return str === reversed;
}
console.log(isPalindrome1("madam"));

// Two pointer approach
function isPalindrome2(str) {
    let left = str[0];
    let right = str[length - 1];

    while(left < right) {
        if(str[left] !== str[right]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome2("madam"));