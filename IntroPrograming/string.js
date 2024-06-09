let data = "Hello Purwadhika"
let dataUpper = data.toUpperCase().replace("O","O")
let dataLower = data.toLowerCase()

console.log(data)
console.log(dataUpper)
console.log(dataLower)
console.log(data.charAt(8)) // mencari huruf keberapa
console.log(data.search("r")) // mencari huruf nya letak keberapa
console.log(data.replaceAll("a","4")) // mengganti huruf yg d tentukan
console.log(data.repeat("a")) // 

const message = `Hello Bandung ${data}` // $ untuk menambah data var asalkan pake ``
let message2 = "Hello Bandung " + data // menambah data tanpa `` dan $
let message3 = "Hello Bandung ".concat(data) // menambah data dgn method

console.log(message)
console.log(message2)
console.log(message3)