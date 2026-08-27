function missingNumber(arr) { 
    const n = arr.length + 1;

    const expected = n * (n + 1) / 2;
    const actual = arr.reduce((sum, num) => sum + num, 0);

    return expected - actual;
}

console.log(missingNumber([1, 2, 3, 5]));
// 4