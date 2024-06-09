let arr = ["A", "B", "C", "D", "E"]
let arr2 = new Array ("A", "B", "C", "D", "E")

console.log(arr)
console.log(arr2)

// menambah value
arr.push("F") //  menambah belakang
arr.unshift("X") // menambah ke depan

// deleting value
arr.pop() // hapus belakang
arr.shift() // hapus depan

// join > untuk modify val di dalam arr
let strJoin = arr.join("")
console.log(strJoin)

console.log(arr.reverse()) // membalikan val
console.log(arr.reverse().join("")) // bisa di tambah method lain
console.log(arr.length)  // untuk jumlah isi val 

//array ada method yg berpengaruh dan tidak walaupun ada di console.log'

let num = [3, 2, 1]
let name = ["Budi", "Asep", "Cameh"]

num.sort() // num.sort((a, b) => b - a) > tidak berpengaruh d string
arrName.sort() 

console.log(num);
console.log(arrName);

const fruits = [`apple`, `Mango`, `Banana`, `Durian`]
const fruits2 = [...fruits] // copy var awal

fruits.splice(1, 1) // menghapus val tengah
fruits.splice(1, 0, `kiwi`, `Lemon`, `Melon`) // tambah tengah
let deletedFruits = fruits.splice(1, 2) // menyimpan index yg terhapus

console.log(fruits);