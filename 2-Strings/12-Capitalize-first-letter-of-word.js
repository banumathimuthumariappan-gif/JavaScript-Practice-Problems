// Using map()
function capitalizeWords(sentence) {
    return sentence.split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}

console.log(capitalizeWords("hello world javascript"));

// Without map()
function capitalizeWords1(sentence) {
    let words = sentence.split(" ");

    for(let i=0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

console.log(capitalizeWords1("hello world javascript"));