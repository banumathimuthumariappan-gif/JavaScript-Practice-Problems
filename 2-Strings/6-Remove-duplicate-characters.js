// Using Set
function removeDuplicates(str) { 
    return [...new Set(str)].join('');
}

// Without using Set
function removeDuplicates1(str) {
    let result = '';

    for(let char of str) {
        if(!result.includes(char)) {
            result += char;
        }
    }
    return result;
}

console.log(removeDuplicates("programming"));
console.log(removeDuplicates1("programming"));