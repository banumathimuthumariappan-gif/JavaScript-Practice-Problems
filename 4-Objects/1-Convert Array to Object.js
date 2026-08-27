const arr = ["apple", "banana", "orange"];

// Approach 1 — Object.assign()
function arrayToObject(arr) {
    return Object.assign({}, arr);
}
console.log(arrayToObject(["apple", "banana", "orange"]));

// Using reduce
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Priya" },
  { id: 3, name: "David" }
];

function arrayToObject1(arr) {
    return users.reduce((obj, user) => {
        obj[user.id] = user;
        return obj;
    }, {});
}

console.log(arrayToObject1(users));