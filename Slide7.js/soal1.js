// two object are equal



function twoObjectsEqual(obj1, obj2) {
    // Periksa apakah kedua argumen adalah objek dan bukan null
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }

    // Periksa apakah kedua argumen adalah objek dan bukan null
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Periksa apakah kedua objek memiliki jumlah kunci yang sama
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Periksa apakah semua kunci dan nilai sama pada kedua objek > for of (array)
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}


console.log(twoObjectsEqual({ a: 1 }, { b: 2 })); // false
console.log(twoObjectsEqual({ a: "Hello" }, { a: 1 })); // false
console.log(twoObjectsEqual({ a: 1 }, { a: 1 })); // true


