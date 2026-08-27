function frequency(str) {
    let count = {};

    for(let char of str) {
        count[char] = count[char] + 1 || 1;
    }
    return count;
}

console.log(frequency("hello"));