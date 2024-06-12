// switch array 


// function switchValue (arrayObject) {
//     return arrayObject.map(obj => {
//         const switchObj = {};
//         for (let key in obj) {
//             switchObj[obj[key]] = key; // menukar value menjadi key (di balik)
//         }
//         return switchObj;
//     });

// }

// const input = [{ name: `David`, age: 20 }]
// const output = switchValue(input);

// console.log(output);

//  cara 2

let obj = [{ name: "David", age: 20}]

function switchObj(obj) {
    let res = {}
    for (const key in obj [0] {
        res [obj[0][key]] = key
    })
    return switchObj
}

