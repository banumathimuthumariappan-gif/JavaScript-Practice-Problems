function isAnagram(str1, str2) {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent"));

function isAnagram2(str1, str2) {
    let count = {};

    for(let char of str1) {
        count[char] = count[char] + 1 || 1;
    }

    for(let char of str2) {
        if(!count[char]) {
            return false;
        }
        count[char]--;
    }
    return true;
}

console.log(isAnagram2("listen", "silent"));