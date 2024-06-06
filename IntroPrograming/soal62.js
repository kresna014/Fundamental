// -Write a code to convert days to years, months and days

let n = 400

let tahun = Math.floor(n/365) // 1
let sisa = n - (tahun*365) // 35 // alternate : n % 365 
let bulan = Math.floor(sisa / 30) // 1
let hari = sisa - (bulan * 30) // 5

console.log ({
    hari,
    bulan,
    tahun

})

// Write a code to get difference between dates in days.

const date1 = new Date ("2022-01-20")
const date2 = new Date ("2022-01-22")
const diff = (date2 - date1) / (60 * 60 * 24 * 1000)

console.log(diff)