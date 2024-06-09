// bilangan prima 

// let bilangan = 7 ;
// let jawaban ;
// if (bilangan >1) {
//     for (let i = 2; i < bilangan ; i++) {
//     if (bilangan % i === 0) {
//         jawaban = false;
//         break ;
//       }  else {
//             jawaban = true ;
//             break
//         }

//     }
// } else {
//     jawaban = false ;
// }

//     if (jawaban == true) {
//         console.log("bilangan prima") }
//    else { console.log("bukan bilangan prima") ;}


// lecture

let number = 9
let divider = 0

for (let i = 1 ; i <= number; i++) {
    if (number % i == 0) {
        console.log(i)
        divider++
    }
}

console.log(
    divider == 2 ? 
    `${number} is prime number` :
    `${number} is not prime number` 
) ;