// cek ganjil atau genap

const number = 25

// cek jika genap
if(number % 2 == 0) {
    console.log("The number is even.");
}

// jika ganjil
else {
    console.log("The number is odd.");
}

// lecture

let n = 2

if (n % 2 == 1) {
    console.log(`${n} is odd number`)
} else {
    console.log(`${n} is even number`)
}

console.log(n % 2 == 1 ? `${n} is odd number` : `${n} is even number`)