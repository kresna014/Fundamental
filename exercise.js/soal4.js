// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

let arr1 = [1, 2, 3];
let arr2 = [3, 2, 1];

function calArr (arr1, arr2) {
    let newArr = [];
for (i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i] + arr2[i])
}
    return newArr ;
}

console.log(calArr(arr1, arr2))

// lecture

function sumTwoArr(arr1, arr2) {
    return arr1.map((val, idx) => val + arr2[idx])
}

console.log(sumTwoArr([1, 2, 3], [3, 2, 1]))