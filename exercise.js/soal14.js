// Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

function dupeNumber(arr) {
    let arr1 = [];
    for (i = 0; i <= arr.length - 1; i++) {
       if (arr[i] == arr[0]) {
        arr1.push(arr[i])
       }
    }
    let a = arr1.reduce((a, b)=>a + b) ;
    return a

}

let arr3 = [10, 20, 40, 10, 50, 30, 10, 60, 10]
console.log((dupeNumber(arr3)));

//

