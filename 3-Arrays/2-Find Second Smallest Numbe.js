function secondSmallest(arr) {
    let smallest = Infinity;
    let secondSmallest = -Infinity;

    for(let num of arr) {
        if(num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num > smallest && num < secondSmallest) {
            secondSmallest = num;
        }
    }
    return secondSmallest;
}

console.log(secondSmallest([10, 20, 5, 30, 25]));
// 10