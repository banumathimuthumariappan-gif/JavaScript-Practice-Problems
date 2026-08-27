// 6. Find the largest of 3 numbers
// Using built in method
function largest(a, b, c) {
    return Math.max(a, b, c);
}
console.log(largest(10, 25, 15));

// Without using built in method
function largest1(a, b, c) {
    if(a > b && a > c) {
        return a;
    } else if (b > c) {
        return b;
    } else {
        return c;
    }
}
console.log(largest1(10, 25, 15));