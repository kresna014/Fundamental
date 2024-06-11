// write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const difference = findDifference(arr1, arr2);

function findDifference(arr1, arr2) {
    const num1 = new Set(arr1);
    const num2 = new Set(arr2);

    const difference1 = arr1.filter(x => !num2.has(x));
    const difference2 = arr2.filter(x => !num1.has(x));

    return [...difference1, ...difference2];
}

console.log(difference);