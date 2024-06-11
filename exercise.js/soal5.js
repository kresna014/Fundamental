// Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

let arr1 = [1, 2, 3, 4];
let newElement1 =  4;
let arr2 = [1, 2, 3, 4];
let newElement2 = 7;

function addUniqueElement(arr, newElement){
    if (!arr.includes(newElement)){
        arr.push(newElement)
    }
    return arr;
}



 console.log(addUniqueElement(arr1, newElement1))
 console.log(addUniqueElement(arr2, newElement2))

 // lecture

 function addUniqueElement(arr, number) {
    if (arr.includes(number) == false) {

    }
    return arr
 }
 
console.log(addUniqueElement([1, 2, 3, 4], 5))
console.log(addUniqueElement([1, 2, 3, 4], 7))

let = [1, 2, 3]
console.log(arr.includes(4))
console.log()