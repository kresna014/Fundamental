// SOAL 6 

const day1 = 400
const day2 = 366
let year1 = day1/365
let year2 = day2/365
let month1 = (day1-365)/30
let month2 = (day2-365)/30
let days1 = day1-365-30
let days2 = day2-365

console.log("example 1: " + Math.floor(year1) + "year," + Math.floor(month1) + "month, " + days1 + "days")
console.log("example 1: " + Math.floor(year2) + "year," + Math.floor(month2) + "month, " + days2 + "days")

