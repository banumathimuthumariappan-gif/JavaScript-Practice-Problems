function firstNonRepeating(str) {
    let count = {};

    for(let char of str) {
        count[char] = count[char] + 1 || 1;
    }

    for(let char of str) {
        if(count[char] === 1) {
            return char;
        }
    }
    return null;
}

console.log(firstNonRepeating("swiss"));
// "w"