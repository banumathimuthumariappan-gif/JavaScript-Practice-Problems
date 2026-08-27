const obj = {
  name: "Priya",
  age: 30,
  city: "Bangalore"
};

function objectToArray(obj) {
    return Object.entries(obj);
}

console.log(objectToArray(obj));