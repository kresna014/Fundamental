// intersection two object

// class

// class CheckObjek {
//     static splite(objek1, objek2) {
//         const result = {};
        
//         // Iterasi melalui key dari objek pertama
//         for (let key in objek1) {
//             // Periksa apakah key juga ada di objek kedua dan nilainya sama
//             if (objek2.hasOwnProperty(key) && objek1[key] === objek2[key]) {
//                 result[key] = objek1[key];
//             }
//         }
        
//         return result;
//     }
// }


// console.log(CheckObjek.splite({ a: 1, b: 2 }, { a: 1, c: 3 })); // Output: { a: 1 }
// console.log(CheckObjek.splite({ a: 1, b: 2, c: 3 }, { a: 1, b: 3, c: 3 })); // Output: { a: 1, c: 3 }
// console.log(CheckObjek.splite({ a: 1, b: 2 }, { a: 2, b: 2 })); // Output: { b: 2 }

// function

function sliceObjek(objek1, objek2) {
    const result = {}; // objek kosong
    
    for (let key in objek1) {
        
        if (objek1[key] == objek2[key]) {
            result[key] = objek1[key];
        }
    }
    
    return result;
}


console.log(sliceObjek({ a: 1, b: 2 }, { a: 1, c: 3 })); // Output: { a: 1 }
console.log(sliceObjek({ a: 1, b: 2, c: 3 }, { a: 1, b: 3, c: 3 })); // Output: { a: 1, c: 3 }
console.log(sliceObjek({ a: 1, b: 2 }, { a: 2, b: 2 })); // Output: { b: 2 }
