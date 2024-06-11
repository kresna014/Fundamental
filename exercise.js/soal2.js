// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.

const kata = ["apple", "banana", "chrerry", "date"]
console.log(concatenating(kata));

function concatenating(kata) {
    {
    if (kata.lengt === 0)
        return`` ;
}
    if (kata.lengt === 1) {
        return kata[0];
}
    if (kata.length === 2) {
        return kata.join(` and `);
}
 const kata2 = kata.slice(0, -1).join(`, `);
 const kata3 = kata[kata.length - 1];
 return `${kata2},  and ${kata3}`;

}

// function harus selalu di dalam {}