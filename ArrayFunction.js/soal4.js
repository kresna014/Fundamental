// Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

function removeOddNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = removeOddNumbers(numbers);
console.log(evenNumbers); 
