function pairWithSum(arr, target) {
    const seen = new Set();

    for(const num of arr) {
        const complement = target - num;
        if(seen.has(complement)) {
            return [complement, num];
        }
        seen.add(num);
    }
    return null;
}

console.log(pairWithSum([2, 7, 11, 15], 9));
// [2, 7]