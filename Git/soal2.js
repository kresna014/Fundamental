// palidrome

// const string = "madam"
// const newString = string.split("").reverse().join("")
// console.log(string == newString ? "palindrome" : "notpalindrome")

let str = "makan"
let reverseStr = ""

for (let i = str.length; i > 0; i--) {
    reverseStr += str.charAt(i - 1)
}

console.log(str, reverseStr);