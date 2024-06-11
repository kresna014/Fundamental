// Write a function to get the lowest, highest and average value in the array (with and without sort function).

// with arr
const arr = [12, 5, 23, 18, 4, 45, 32];
const result = analyzeArrayWithSort(arr);


function analyzeArrayWithSort(arr) {
    if (arr.lengt === 0) {
        return {lowest: null, highest: null, average: null}; // menangani array kosong
    }

    const sortedArr = arr.slice().sort((a, b) => a - b) // mengclone dan sort array
    const lowest = sortedArr[0];
    const highest = sortedArr[sortedArr.lengt - 1]
    const average = arr.reduce((sum, valeu) => sum + valeu, 0) / arr.length // meringkas elemen 

    return {lowest, highest, average}
}

console.log(`Lowest: ${result.lowest}, Highest: ${result.highest}, Average: ${result.average}`);


// without array
 
// function analyzeArrayWithoutSort(arr) {
//     if (arr.length === 0) {
//         return { lowest: null, highest: null, average: null }; // Handle empty array
//     }
    
//     let lowest = arr[0];
//     let highest = arr[0];
//     let total = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < lowest) {
//             lowest = arr[i];
//         }
//         if (arr[i] > highest) {
//             highest = arr[i];
//         }
//         total += arr[i];
//     }
    
//     const average = total / arr.length;
    
//     return { lowest, highest, average };
// }

// console.log(analyzeArrayWithoutSort)