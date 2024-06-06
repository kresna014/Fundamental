// FIBONACCI

let num = 15
let a = 0 
let b = 1

for (let i=1; i < num; i++) {
    let nextNum = a + b
    a = b
    b = nextNum

}

console.log(b)