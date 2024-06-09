// BETWEEN date in days

let date1 = new Date("2022/01/20")
let date2 = new Date("2022/01/22")
let diffTime = Math.abs(date1 - date2) //  abs > selisih dari var date1-date2
let diffDate = Math.floor(diffTime / (1000 * 3600 * 24))

console.log("date " + diffDate) 