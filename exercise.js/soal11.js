// Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

let arr = [1, [], undefined, {}, "string", {}, []];
const primitive = filterPrimitive(arr);

function filterPrimitive(arr) {
    return arr.filter(item => {
        return (typeof item !== 'object' && typeof item !== 'function')
    });
}

console.log(primitive); 