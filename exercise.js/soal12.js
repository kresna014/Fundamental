// Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

const number = [5, 3, 1, 7, 2, 6];
const result = secondSmallest(number);

function secondSmallest(number) {
    if (number.length < 2) {
        throw new Error ("setidaknya 2 element");
    }
    let first = Infinity;
    let second = Infinity;

    for (let num of number) {
        if (num < first) {
            second = first;
            first = num;
        } else if (num < second && num !== first) {
            second = num
        }
    }

    return (second) ;
}

console.log(result);