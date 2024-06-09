let now = new Date ()
let newYear = new Date("2025-01-01")


console.log(now)
console.log(newYear)

console.log(now.getDate()) // mendapatkan waktu skr
console.log(now.getMonth()) // bulan
console.log(now.getFullYear()) // tahun
console.log(now.getDay()) // hari apa

console.log(new Date(now.setHours(10,10,10)))

// get mendapatkan data waktu
// set mengatur data waktu

// (24 * 3600 * 1000)
// di hitung epoc 

console.log(now.setHours(10))
console.log(new Date(now.setHours(10, 10, 10)))