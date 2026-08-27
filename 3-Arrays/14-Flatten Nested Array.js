// Using flat

const arr = [1, [2, [3, 4]], 5];
console.log(arr.flat(Infinity));

// Using recursive approach
function flatten(arr) {
    let result = [];

    for(const item of arr) {
        if(Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log(flatten(arr))