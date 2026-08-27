function removeDuplicates(arr) { 
    return [...new Set(arr)];
}

function removeDuplicates1(arr) { 
    let result = [];
    for(let num of arr) {
        if(!result.includes(num)) {
            result.push(num);
        }
    }
    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates1([1, 2, 2, 3, 3, 4]));
// [1, 2, 3, 4]