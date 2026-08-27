function fibonacci(n) {
    let result = [];

    let first = 0;
    let second = 1;
    for(let i = 0; i < n; i++) {
        result.push(first);

        let next = first + second;
        first = second;
        second = next;
    }
    return result;
}
console.log(fibonacci(7));
console.log(fibonacci(5));