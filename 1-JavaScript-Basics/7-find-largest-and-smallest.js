// 7. Find the largest and smallest number in an array
// Using built in method
function findLargestandSmallest(arr) {
    let largest = arr[0];
    let smallest = arr[0];

    largest = Math.max(...arr);
    smallest = Math.min(...arr);

    return {
        largest, smallest
    };
}

console.log(findLargestandSmallest([10, 5, 25, 8, 30]));

// Without built in method
function findLargestandSmallest1(arr) {
    let largest = arr[0];
    let smallest = arr[0];
    for(let num of arr) {
        if(num > largest) {
            largest = num;
        }
        if(num < smallest) {
            smallest = num;
        }
    }
    return {
        largest, smallest
    };
}

console.log(findLargestandSmallest1([10, 5, 25, 8, 30]));