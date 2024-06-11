// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win' js



function batuKertasGunting(pilihanPemain) {
    const pilihan = ['batu', 'kertas', 'gunting'];
    const pilihanKomputer = pilihan[Math.floor(Math.random() * pilihan.length)];

    // Aturan untuk menang
    const aturan = {
        'batu': 'gunting',
        'kertas': 'batu',
        'gunting': 'kertas'
    };

    // Menentukan hasil
    if (pilihanPemain === pilihanKomputer) {
        return 'Seri';
    } else if (aturan[pilihanPemain] === pilihanKomputer) {
        return 'Menang';
    } else {
        return 'Kalah';
    }
}

// Contoh penggunaan
const pilihanPemain = 'batu';
const hasil = batuKertasGunting(pilihanPemain);
console.log(`Pilihan pemain: ${pilihanPemain}`);
console.log(`Hasil: ${hasil}`);
