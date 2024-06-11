// combine number

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combineArray = combineArrays(arr1, arr2);

function combineArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(combineArray)