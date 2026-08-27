const employees = [
  { name: "John", salary: 50000 },
  { name: "Priya", salary: 70000 },
  { name: "David", salary: 60000 }
];

// Using reduce()
function findMaxObject(arr) {
    return arr.reduce((max, current) => {
        return current.salary > max.salary ? current : max
    });
}
console.log(findMaxObject(employees));

// Using loop
function findMaxObject1(arr) {
    let max = arr[0];

    for(let value of arr) {
        if(value.salary > max.salary) {
            max = value;
        }
    }
    return max;
}

console.log(findMaxObject1(employees));
