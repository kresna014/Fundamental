let data = "Hello Purwadhika"
let dataUpper = data.toUpperCase().replace("O","O")
let dataLower = data.toLowerCase()

console.log(data)
console.log(dataUpper)
console.log(dataLower)
console.log(data.charAt(8))
console.log(data.search("r"))
console.log(data.replaceAll("a","a")) 

const message = `Hello Bandung ${data}`
let message2 = `Hello Bandung ` + data
let message3 = `Hello Bandung `.concat(data)

console.log(message)
console.log(message2)
console.log(message3)