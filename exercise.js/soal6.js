// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]

const number = [1, 2, 3, 4, 5, 6]
const numberEven = removedOddNumber(number) ;

function removedOddNumber(number) {
    return number.filter(number => number % 2 === 0)
}

console.log(numberEven)