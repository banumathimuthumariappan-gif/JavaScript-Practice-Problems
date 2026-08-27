function moveZeros(arr) {
    let index = 0;
    for(let num of arr) {
        if(num !== 0) {
            arr[index] = num;
            index++;
        }
    }
    while(index < arr.length) {
        arr[index] = 0;
        index++;
    }
    return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12]));