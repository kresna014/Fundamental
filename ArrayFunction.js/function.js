let num1 = 12
let num2 = 13

let sum1 = 12
let sum2 = 13

// declaration
function penjumlahan (a, b) { // parameter 
    return a + b
}

// console.log(penjumlahan(2, 3)) // function harus pake parasentis ()
// console.log(penjumlahan(3, 5))
// console.log(penjumlahan(num1, num2))

// expression
const square = function(a) {
    return a * a
}

console.log(square(10))

// default parameter
function multiply(a, b) { // alter b = 1 jika b tidak ada di console
    return a * b
}

console.log(multiply(2, 4))

function oddEven(num) {
    // if (num % 2 == 0) {
    //     return `even`
    // } else {
    //     return `odd`
    // }
    return num % 2 == 0 ? `even` : `odd`
}

console.log(oddEven(10));

//nested function (function d dalam function)
function getMessage(firstName) {
    function sayHello() {
        return "Hello " + firstName + ". " 
    }


    function welcomePurwadhika() {
        return "Welcome to Purwadhika"
    }

    return sayHello() + welcomePurwadhika()

}

    console.log(getMessage("Jhon"))

// closure function (function yg mereturn function)
function greeting(name) {
    const defaultmessage = "Hello "

    return function() {
        return defaultmessage + name
    }
}

const greetingDavid = greeting("David")
console.log(greetingDavid()) // var di buat di dalam func tidak bisa di akses di luar func


// currying function (f (a,b,c) jadi f(a)(b)(c))
function multiplier(factor) {
    return function (number) {
        return number * factor
    }
}

const mul3 = multiplier(3)
const mul2 = multiplier(2)

console.log(mul3(4));
console.log(mul3(5));


// Recursive function (memanggil function sendiri)
function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}

countDown(5);


// arrow function (mempersingkat/alternate function) 
// ada limitasi nya 

const sum = (a, b) => a + b // default
console.log(sum(12, 4))

