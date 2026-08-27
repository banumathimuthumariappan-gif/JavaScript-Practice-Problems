function secondLargest(arr) { 
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let num of arr) {
        if(num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num < largest && num > secondLargest) {
            secondLargest = num;
        }
    }
    return secondLargest
}

console.log(secondLargest([10, 20, 5, 30, 25]));