// FIBONACCI
// 0, 1, 1, 2, 3, 5, ...
// 15 -> 610

let num = 15
let a = 0 // 1
let b = 1 // 1

for (let i=1; i < num; i++) {
    let nextNum = a + b //  a = 0 , b = 1 dst....
    a = b
    b = nextNum

}

console.log(b)