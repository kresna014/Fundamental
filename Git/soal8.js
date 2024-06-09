let str = `The QuiCK BrOwN Fox`
let result = ""

for (let i = 0;  i < str.length; i++) { 
    if (str.charAt(i) == str.charAt(i).toUpperCase() ) {
        result += str.charAt(i).toUpperCase()
    } else {
        result += str.charAt(i).toLowerCase()
    }
}


console.log(result)
