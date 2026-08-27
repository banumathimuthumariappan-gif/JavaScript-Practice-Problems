// Using built in methods
function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
}

// Without built in methods
function reverseWords1(sentence) {
    let words = sentence.split(" ");
    let result = '';

    for(let i = words.length - 1; i >= 0; i--) {
        result += words[i];

        if(i !== 0) {
            result += " ";
        }
    }
    return result;
}

console.log(reverseWords("hello world javascript"));
console.log(reverseWords1("hello world javascript"));
// "javascript world hello"