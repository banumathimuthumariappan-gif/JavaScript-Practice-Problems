// Built in function
function reverseArray(arr) {
    return arr.reverse();
}

// Two pointer approach
function reverseArray1(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray1([1, 2, 3, 4]));
// [4, 3, 2, 1]