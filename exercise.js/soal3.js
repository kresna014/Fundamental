function splitStringIntoWords(str) {
    let words = [];
    let word = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            if (word !== '') {
                words.push(word);
                word = '';
            }
        } else {
            word += str[i];
        }
    }
    if (word !== '') {
        words.push(word);
    }
    return words;
}

let str = "Hello World";
let result = splitStringIntoWords(str);
console.log(result);
