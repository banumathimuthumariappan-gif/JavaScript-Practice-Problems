function findMissing(arr, n) {
    let set = new Set(arr);
    let result = [];

    for(let i = 1; i <= n; i++) {
        if(!set.has(i)) {
            result.push(i);
        }
    }
    return result;
}

console.log(findMissing([1, 2, 5, 8], 8));