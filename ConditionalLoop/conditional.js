// if dan else

let age = 21

if (age >= 17) {
    console.log('you can now create an id card')
} else {
    console.log ('you are not old enough to create an ID card')
}

// // example string // adjustment exp : kondisi.toLoweCase() , "laPar".toLowerCase()

let kondisi = "lapar"

if (kondisi == "lapar"){
    console.log('makan mereun')
} else {
    console.log('mandi weh')
}


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

switch (grade) {
    case "A":
        console.log("Excellent Result!")
        break
    case "B":
        console.log("Great Result!")
        break
    case "C":
        console.log("Average Result!")
        break
    default :
        console.log("Invalid Result!")

}

// && (and) , || (or) , ! (not)

let ganteng = false 
let kaya = true 

if ((ganteng || kaya)) {
    console.log('Jadian')
} else {
    console.log('Temenan')
}

// Tenary

const str = "javascript"

console.log(str == "javascript" ? "javascript" : "Not javascript")
console.log(ganteng || kaya ? "jadian" : "temenan" )
console.log(grade == "A" ? "excellent" : grade ==  "B" ? "Great" : "invalid")




