// Using iterative stack
function flatten(arr) {
    const stack = [...arr];
    let result = [];

    while(stack.length > 0) {
        const item = stack.pop();

        if(Array.isArray(item)) {
            stack.push(...item);
        } else {
            result.push(item);
        }
    }
    return result.reverse();
}

console.log(
  flatten([1, [2, [3, 4]], 5])
);