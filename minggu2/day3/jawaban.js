
// DEKLARASI DAN STRUKTUR DATA
// 1.
let perpustakaan = {};
// 2.
let daftarPengunjung = [];
// 3.
//perbedaan array dan object
// array adalah struktur data yang menyimpan element dan diakses index
// object adalah struktuur data yang menyimpan data dalam bentuk pasangan yaitu kay:value, diakses dengan key sebagai property dan akan menampilkan valuenya
// 4. 
// - bagian dari object adlah property yang terdiri ber pasangan antara kunci-nilai(key dan value)
// - bagian dari array adalah element dan diakses dengan indeks
let obj = {
    'key': 'value',
    'key2': 'value2',
}
// MANIPULASI DATA
// 5.
perpustakaan.nama = "perpustakaan kota";
perpustakaan.alamat = "Jl. Pendidikan No. 123";
perpustakaan.tahunBerdiri = 1995;

// console.log(perpustakaan);

// 6.
daftarPengunjung.push('irgi', 'kahfi', 'xena');
// console.log(daftarPengunjung);
// 7.
let perpustakaanDigitalKota = perpustakaan;// memindahkan isi

delete perpustakaan;// menghapus nama lama
// console.log(perpustakaan);
// 8.
daftarPengunjung[0] = 'Ahmad Budi'; // diinisialisasikan ulang
// console.log(daftarPengunjung);
// 9.
perpustakaanDigitalKota.jumlahbuku = 5000;
// console.log(perpustakaanDigitalKota);
// 10.
daftarPengunjung.push('Sari Dewi')
// console.log(daftarPengunjung);

// Struktur Nested dan complex
// 11.
let KategoriBuku = [["fiksi", "non fiksi"], ["sains", "sejarah", "biografi"]]
// for (let i = 0; i < KategoriBuku.length; i++) {
//     if (typeof KategoriBuku[i] == 'object') {
//         console.log(`ini adalah array1 ${KategoriBuku[i]}`);
//         for (let j = 0; j < KategoriBuku[i].length; j++) {
//             console.log(`ini adalah array2 ${KategoriBuku[i][j]}`);
//         }
//     } else {
//         console.log(KategoriBuku[i]);
//     }

// }
// 12.
perpustakaan.fasilitasPerpustakaan = {} // menambahkan property fasilitas
perpustakaan.fasilitasPerpustakaan.ruangBaca = { kapasitas: 100, lantai: 1 } // menambahkan key
perpustakaan.fasilitasPerpustakaan.ruangKomputer = { kapasitas: 30, lantai: 2 }
// console.log(perpustakaan);
// 13.
delete perpustakaan.tahunBerdiri;
// console.log(perpustakaan);
// 14.
let obj1 = {
    anggota: "jeniskeanggotaan", // key biasa
    "jenis keanggotaan": "jeniskeanggotaan", // key ada spasi harus pake string
    2025: "anggota2025", // key pake angka
    "@gmail": "@gmail.com" // key pake simbol harus pake string
}

// BAGIAN LOOPING DAN  ITERASI
//  15.
// for (let a in perpustakaan) {
//     console.log(`array ==> ${a}, ini value ==> ${perpustakaan[a]}`);
//     if (typeof perpustakaan[a] == 'object') {
//         for (let b in perpustakaan[a]) {
//             console.log(`array ==> ${b}, ini value ==> ${perpustakaan[a][b]}`);
//         }
//     } else {
//         console.log(`key ==> ${a}, ini value ${perpustakaan[a]}`);
//     }
// }
// console.table('\n ini sekadar pemisah soal \n')
// // 16.
// for (let a in perpustakaan.fasilitasPerpustakaan) {
//     console.log(`array ==> ${a}, ini value ==> ${perpustakaan.fasilitasPerpustakaan[a]}`)
//     if (typeof perpustakaan.fasilitasPerpustakaan[a] == 'object') {
//         for (let b in perpustakaan.fasilitasPerpustakaan[a]) {
//             console.log(`array ==> ${b}, ini value ==> ${perpustakaan.fasilitasPerpustakaan[a][b]}`);
//         }
//     } else {
//         console.log(`key ==> ${a}, ini value ${perpustakaan.fasilitasPerpustakaan[a]}`);
//     }
// }
// 17.
let cabangperpustakaan = perpustakaan;
// console.log(cabangperpustakaan);
// 18.
perpustakaan.KoleksiBukuBaru = [];
let sistemPerpustakaan = {
    tambahBuku: function (judul, pengarang) {
        perpustakaan.KoleksiBukuBaru.push({
            judul: judul,
            pengarang: pengarang
        })
    },
    cariBuku: function (judul) {
        let Buku = perpustakaan.KoleksiBukuBaru.find((buku) => buku.judul === judul);
        if (Buku) {
                console.log(`Judul buku : ${Buku.judul}, pengarang : ${Buku.pengarang}`);
            } else {
                return 'Buku tidak ditemukan';
            }

    },
    hitungTotalBuku: function () {
        console.log(perpustakaan.jumlahbuku);
    },
    tampilkanInfo: function () {
        // console.log(perpustakaan);
    }
}

// console.log(sistemPerpustakaan.tambahBuku);


sistemPerpustakaan.tambahBuku("Laskar Pelangi", "Andrea Hirata");
sistemPerpustakaan.tambahBuku("Bumi Manusia", "Pramoedya Ananta Toer");


// console.log(sistemPerpustakaan.hitungTotalBuku());
sistemPerpustakaan.tampilkanInfo();
console.log("=========================================")
console.log("     INFORMASI PERPUSTAKAAN DIGITAL");
console.log("========================================");
console.log('\n');
console.log(`Nama Perpustakaan: ${perpustakaanDigitalKota.nama}`);
console.log(`Alamat: ${perpustakaanDigitalKota.alamat}`);
console.log(`Total Koleksi Buku: ${perpustakaanDigitalKota.jumlahbuku} buku`);
console.log('\n');
console.log("========================================");
console.log(`         FASILITAS TERSEDIA`);
console.log("========================================");
console.log('\n');
console.log('🪑 Ruang Baca');
console.log(`     ⚫ Kapasitas:${perpustakaan.fasilitasPerpustakaan.ruangBaca.kapasitas}`);
console.log(`     ⚫ Lokasi:${perpustakaan.fasilitasPerpustakaan.ruangBaca.lantai}`);
console.log('\n');
console.log('💻 Ruang Komputer');
console.log(`     ⚫ Kapasitas:${perpustakaan.fasilitasPerpustakaan.ruangKomputer.kapasitas}`);
console.log(`     ⚫ Lokasi:${perpustakaan.fasilitasPerpustakaan.ruangKomputer.lantai}`);
console.log('\n');
console.log('===========================================');
console.log('         KOLEKSI BUKU TERBARU');
console.log('============================================');
console.log('\n');
sistemPerpustakaan.cariBuku("Laskar Pelangi");
sistemPerpustakaan.cariBuku("Bumi Manusia")
console.log('\n');
console.log("===========================================");
console.log('         PENGUNJUNG HARI INI');
console.log('===========================================');
console.log('\n');

for (let i = 0; i < daftarPengunjung.length; i++) {
    console.log(`• ${daftarPengunjung[i]}`);
}
console.log('\n');
console.log("===========================================");
console.log("Status Sistem: ✅ Online");
console.log("Terakhir diupdate: 11 September 2025");
console.log("===========================================")

