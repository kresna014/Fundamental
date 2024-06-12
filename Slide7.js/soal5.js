// factorial

// function

// function factorial(n) {
//     // Basis dari rekursi: jika n adalah 0 atau 1, kembalikan 1
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     // Panggil fungsi factorial() secara rekursif untuk n - 1 dan kalikan dengan n
//     return n * factorial(n - 1);
// }

// const number = 5;
// const equal = factorial(number);
// console.log(`${number}! = ${number} x ${number - 1} x ${number - 2} x 1 = ${equal}`);


// class

// class Factorial {
//     static equal(n) {
//         // Basis dari loop: jika n adalah 0 atau 1, kembalikan 1
//         if (n === 0 || n === 1) {
//             return 1;
//         }
//         // Panggil metode hitung() secara loop untuk n - 1 dan kalikan dengan n
//         return n * this.equal(n - 1);
//     }
// }

// const num = 5;
// const result = Factorial.equal(num);
// console.log(`${num}! = ${num} x ${num - 1} x ${num - 2} x 1 = ${result}`);


// function factorial(n) {
//     // Basis dari loop: jika n adalah 0 atau 1, kembalikan 1
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//      // Panggil metode hitung() secara loop untuk n - 1 dan kalikan dengan n
//     return n * factorial(n - 1);
// }

// function calculateFactorials(arr) {
//     return arr.map(factorial);
// }

// // Contoh penggunaan
// const inputArray = [5];
// const outputArray = calculateFactorials(inputArray);
// console.log(outputArray)

// CARA GILA

function factorial(n) {
    console.log(n);
    return n == 0 ? 1 : n * factorial(n - 1)
}

console.log(factorial(10))

