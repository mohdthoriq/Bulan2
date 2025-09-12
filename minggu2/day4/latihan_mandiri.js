// 1.
let nilai = [1, 2, 3, 4, 5, 6]
let [a, b, c, d, e, f] = nilai
console.log(a, b, c, d, e, f);
// 2.
let mobil = {
    1: {
        honda: 'honda',
        tahun: 2023
    },
    2: {
        suzuki: 'suzuki',
        tahun: '2024'
    }

}
let {honda, tahun } = mobil[1]; // property luar di letak dibelakang selepas nama object
console.log(honda);
// klo array akses ditentukan index
// object diakses melalui property/key

// 3.
//array
let buah1 = ['apel','mangga']
let buah2 = ['pisang',...buah1] // spread
console.log(buah2);
//object
let user = {nama:'irgi',umur:'20'}
let user1 = {...user,status:'active'}
console.log(user1);
// 4.
function n2(...nilai){
    return nilai.reduce((a, b) => a * b);
}
console.log(n2(...nilai));

// evaluasi
let siswa = {
    nama : 'rina',
    umur : 19,
    kelas :'XII',
    jurusan : 'IPA'
}
let {nama, umur} = siswa
console.log(nama,umur);
let tambah ={...siswa,nilai:90}
console.log(tambah);

let nilaiUjian = [78,59,65,90,93,53]
function rataRata(...nilaiUjian) {
    return nilaiUjian.reduce((a, b) => a + b) / nilaiUjian.length;
}
console.log(`rata - rata nilai ujian : ${rataRata(...nilaiUjian)}`);