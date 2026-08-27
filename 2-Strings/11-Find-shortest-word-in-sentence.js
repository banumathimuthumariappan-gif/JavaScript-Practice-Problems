function shortestWord(sentence) {
    let words = sentence.split(" ");
    let smallest = words[0];

    for(let word of words) {
        if(word.length < smallest.length) {
            smallest = word;
        }
    }
    return smallest;
}

console.log(shortestWord("I love JavaScript"));
// "I"