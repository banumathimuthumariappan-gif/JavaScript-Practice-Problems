function findDuplicateValues(obj) {
    const count = {};
    const duplicated = [];
    for(const value of Object.values(obj)) {
        count[value] = count[value] + 1 || 1;
    }

    for(const value in count) {
        if(count[value] > 1) {
            duplicated.push(Number(value));
        }
    }

    return duplicated;
}

console.log(findDuplicateValues({
  a: 10,
  b: 20,
  c: 10,
  d: 30,
  e: 20
}));
