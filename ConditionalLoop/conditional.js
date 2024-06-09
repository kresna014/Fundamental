// if dan else

let age = 21

// (=) untuk menambah var // (==) / (===) mengkompersasi untuk loop

if (21 >= 17) { // jika true karena true akan running
    console.log('you can now create an id card')
} else { // jika kondisi tidak sesuai dengan var pertama
    console.log ('you are not old enough to create an ID card')
} // yang running hanya yg true karena if nya sesuai 

// example string // adjustment exp : kondisi.toLoweCase() , "laPar".toLowerCase() , untuk menyamakan variable antara huruf besar dan kecil

let kondisi = "lapar" // jika string (== / ===) // jika "L" akan jadi false // bisa memamakai ``

if (kondisi == "lapar"){ // apabila kondisi sama dengan lapar
    console.log('makan mereun')
} else {
    console.log('mandi weh')
}



// membuat loop banyak dengan "else if" di akhiri only "else"

let grade = "B"

if (grade == "A") {
    console.log ("exellent result!")
}   else if (grade == "B") {
    console.log ("great result!")
}   else if (grade == "C") {
    console.log ("average result!")
}   else {
    console.log ("invalid grade !")
}

switch (grade) {  // mengubah if dengan case // tidak bisa var lebihbesar/kecil (number)
    case "A": // sama seperti if dalam bentuk case 
        console.log("Excellent Result!")
        break // harus pake break untuk menjalankan case
    case "B":
        console.log("Great Result!")
        break
    case "C":
        console.log("Average Result!")
        break
    default : // jika jawabanya tidak ada d k 3 d atas
        console.log("Invalid Result!")

}


// Falsy "" ,0 ,null ,undefined, NaN
// Thruty "(blank)" ,[empty arr] ,{empty object} ,1 ,"1"(string) ,"0"(string) , "false"(string) , "true" (string) 

// x=5 , y=5
// && (and) , (x < 10 && y > 1) true
// || (or) , (x == 5 || y == 5) is false
// ! (not) , !(x == y) true

let ganteng = false  // && > t:f = temenan , t:t = jadian , f:t = jadian , f:f = temenan ,
let kaya = true // || >  t:f = jadian , t:t = jadian , f:t = jadian , f:f = temenan
 
if (!(ganteng || kaya)) { // (!ganteng && kaya) ganteng : true, kaya : true = jadian
    console.log(`Jadian`);  
} else {
    console.log(`Temenan`);
}  

// contoh NaN
console.log("1" * "10") // number
console.log(10 * "a") // NaN
console.log(Boolean(NaN))
  
// Tenary

const str = "javascript"

console.log(str == "javascript" ? "javascript" : "Not javascript") // apakah js adalah js jika iya (?) `js` , jika tidak (:) `not js` 
console.log(ganteng || kaya ? "jadian" : "temenan" )
console.log(grade == "A" ? "excellent" : grade ==  "B" ? "Great" : "invalid") // (:) antara kondisi grade jadi apakah




