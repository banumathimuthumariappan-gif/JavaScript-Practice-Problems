function findDuplicates(str) {
    let count = {};
    let result = [];

    for(let char of str) {
        if(char !== ' ') {
            count[char] = count[char] + 1 || 1;
        }
    }

    for(const char in count) {
        if(count[char] > 1) {
            result.push(char);
        }
    }

    return result;
}

console.log(findDuplicates("programming"));