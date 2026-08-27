function twoSum(arr, target) {
    const seen = new Set();

    for(num of arr) {
        let complement = target - num;
        if(seen.has(complement)) {
            return [complement, num];
        }
        seen.add(complement);
    }
    return null;
}

console.log(twoSum([2, 7, 11, 15], 9));
// [2, 7]