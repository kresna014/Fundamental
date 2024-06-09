// currency

// let rupiah = (number) => {
//     return new Intl.NumberFormat ("id-ID", {
//         style: "currency" ,
//         currency: "IDR"
//     }).format(number)
// }

// let uang = rupiah(1000);
// console.log(uang);


// loop version

let number = 1000000
let strNumber = number.toString()
let count = 0
let rupiah = ""

    for(let i = strNumber.length; i > 0; i--) {
        rupiah = strNumber.charAt(i - 1) + rupiah
        count++
        if (count % 3 == 0 && strNumber.length !=count) {
            rupiah = "." + rupiah
        }
    }


console.log(`Rp. ${rupiah},00`)