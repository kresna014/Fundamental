// integral

// const num1 = 42;
// const num2 = 27;
// const largest = findLargest(num1, num2);

// function findLargest(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }

// console.log(`The largest number is: ${largest}`);

// array

const numArray = [42, 27];
const largest = findLargest(numArray);
function findLargest(numArray) {
    return Math.max(...numArray);
}


console.log(`The largest number is: ${largest}`);
