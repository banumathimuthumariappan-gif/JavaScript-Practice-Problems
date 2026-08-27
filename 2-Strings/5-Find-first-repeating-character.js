function firstRepeating(str) {
    const seen = new Set();

    for(let char of str) {
        if(seen.has(char)) {
            return char;
        }
        seen.add(char);
    }
}
console.log(firstRepeating("hello"));
// "l"