let a = 10
let b = 20

 const tambah = (a, b) => {
    console.log(`ini hasil dari penjumlahan ${a + b}`);
}

const kurang  = (a, b) => {
    console.log(`ini hasil dari pengurangan${a - b}`);
}
const bagi = (a, b) => {
    console.log(`ini hasil dari pembagian${a / b}`);
}

const pangkat = (a, b) => {
    console.log(`ini hasil dari perpangkatan ${a ** b}`);
}

const kali = (a, b) => {
    console.log(`ini hasil dari perkalian${a * b}`);
}
const modulus = (a, b) => {
    console.log(`ini hasil dari modulus${a % b}`);
}

tambah(a, b)
kurang(a, b)
bagi(a, b)
pangkat(a, b)
kali(a, b)
modulus(a, b)