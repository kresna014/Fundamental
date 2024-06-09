const number = [1, 2, 3, 4]

number.push(5)

console.log(number);

const sumNumber = number.reduce((a, b) => a + b) // reduce menghasilkan hasil semua var
// number.reduce((a, b) => a + b, 10) menambah penjumlahan jadi 25 (+10)
console.log (sumNumber);

// LOOPING FOR EACH
const fruits = [`apple`, `Mango`, `Banana`, `Durian`]
fruits.forEach((item) => {
    console.log(item)
} )

// MAP (bisa membuat array baru)
fruits.map((item) => {
    console.log(item);
})

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

const newNumber = number.map((item) => {
    return item * 10
})

const newNumber2 = []
number.forEach((item) => {
    newNumber2.push(item * 10) // untuk foreach pake metod push buat mengkalikan var
})

console.log(newNumber);

for (let item of fruits) {
    console.log(item);
}