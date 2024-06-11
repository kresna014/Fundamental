// Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

const mixedArray = ["3", 1, "string", null, false, undefined, 2];
const result = sumNumber(mixedArray);

    function sumNumber(mixedArray) {
        return mixedArray.reduce((sum, item,)  => {
            if (typeof item === 'Number') {  // cek jika item adalah number
                return sum + item
            }
            if (typeof item === 'string' && !isNaN(item)) { // jika item itu string dan bisa menconverte Number
                return sum + Number(item); 
            }
            return sum;
        }, 0)
    }

console.log(result);