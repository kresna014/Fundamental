// Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
const duplicates = findDuplicates(arr);

function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for(let value of arr) {
        if(seen.has(value)) {
            duplicates.add(value);
        } else {
            seen.add(value);
        }
    }

    return Array.from(duplicates);
}

console.log(duplicates);

// lecture

function duplicate(arr) {
    let result = []
    for(let = i ; i < arr.length ; i++) {
        if (arr[i] == arr[i + ]) && !result.includes(arr[i]) {
    }
}
    return result
}

console.log(duplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]))