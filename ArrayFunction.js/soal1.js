// segitiga


let input = 5
let angka = 1
let newAngka = ""

function segitiga(input) {
    for (let i = 1; i <= input; i++) {
        let baris = "" ;
        for (let j = 1; j <= i; j++) {
            if (angka < 10) {
                baris += "0" + angka + " ";
            } else {
                baris += angka + " ";
                }
                angka++;
        }
        console.log(baris)
    }
}

segitiga(4)

