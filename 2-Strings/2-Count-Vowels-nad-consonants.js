function countVowelsConsonants(str) {
    let vowels = 0;
    let consonants = 0;

    str = str.toLowerCase();

    for(let letter of str) {
        if(letter != " ") {
            if("aeiou".includes(letter)) {
                vowels ++;
            } else if(letter >= 'a' && letter <= 'z' ) {
                consonants ++;
            }
        }
    }

    return {
        vowels, consonants
    }
}

console.log(countVowelsConsonants("Hello World"));
// { vowels: 3, consonants: 7 }