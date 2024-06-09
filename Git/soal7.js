// capitalize

// let str = "hello purwadhika bandung"
// let isCapita = true
// let result = ""

// for (let i = 0;  i < str.length; i++) { 
//     if (isCapita == true) {
//         result += str.charAt(i).toUpperCase()
//         isCapita = false
//     } else {
//         result += str.charAt(i).toLowerCase()
//     }


// if (str.charAt(i) == ` `) {
//     isCapita = true
//     }

// }
// console.log(result)

// alternate

const string = "hello purwadhika bandung"
const newString = string.split(" ").map(word => word[0].toLocaleUpperCase() + word.slice(1)).join(" ")
console.log(newString) ;
