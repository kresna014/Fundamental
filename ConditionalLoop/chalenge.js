//chalenge

let n = 5
// for (let i = 1; i <= 5; i++) {
//     let star = `* `;
//     console.log(star.repeat(i))
// }


// segitiga rata kiri

// for (let i = 1; i <= n; i++) {
//     let star = ""
//     for (let j = 1; j <= i; j++) {
//         star += "*"
//     }
//         console.log(star);
// }


// segitiga terbalik rata kanan

for (let i = n; i > 0; i--) {
    let star = ""
    for (let j = 1; j <= i; j++) {
        star += "*"
    }
        console.log(star);
}
