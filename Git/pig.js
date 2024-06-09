let num = "5554441234" // "(555) 444-1234"
// let strNum = ""

// for(let i = num.length; i >= 0;  i--) {
//     strNum = num.charAt(i) + strNum
//     if (i == 6) {
//         strNum = "-" + strNum ;
//     }
//     if (i == 3) {
//         strNum = ") " + strNum ;
//     }
//     if (i == 0) {
//         strNum  = "(" + strNum ;
//     }
// }

// console.log(strNum);

let phone = "(***) ***-****"

for(let i = 0; i < num.length; i++) { //alternate
    phone = phone.replace("*", num.charAt(i))
}

console.log(phone)
console.log(`(${num.slice(0, 3)}) ${num.slice(3, 6)}-${num.slice(6)}`)
