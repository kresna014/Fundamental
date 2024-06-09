// loop for

// var i isi = 0 ; loop akan berjalan 11x selama i < 10 (0-10)
// i = 1 ; loop akan berjalan selama 9x selama  i(1) < 10 (1-9)
// i = 1 ; loop akan berjalan selama 10x selama i(1) <= 10 (1-10)
// i++ ; menambah 1 kecil k besar , i = 1 ; <= 10
// i-- ; tidak berhenti invinity , i = 10 ; >= 1 (harus d balik)
// variable syntax hanya bisa 1x 

// for (let i = 1; i <= 10; i++){ 
//     console.log("Hello World")
//     console.log(`Hello World ke-${i}`) // bisa pake (``) dan bisa mengubah di tambah ${}
// }
// for (let i = 10; i > 0 ; i--){ // bisa -= 2
//     console.log(`Hello Bandung ke-${i}`)
// }
// for(let i = 10; i > 0; i -=2 ) {
//     console.log(`Hello Lunna ke-${i}`)
// }


// continue // untuk skip looping

for (let i = 1; i <= 5; i++) {
    if (i == 3) continue // menghilangkan angka 3 (1245)
    // || exp (i == 3 || i == 4) continue muncul 125
    // && exp (i == 3 && i == 4) continue muncul 12345
    // ! exp (!(i == 3)) continue muncul 3
    // genap (i % 2 != 0) continue muncul 24
    console.log(1)
}