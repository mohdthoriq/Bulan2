// 1.
let dataSiswa = {
    "nama" : "Budi",
    "umur" : 15,
    "jurusan" : "Programming"
}
let Siswa = JSON.stringify(dataSiswa);
console.log(typeof(Siswa));

// 2.
let product = {
    "nama" : "Laptop",
    "harga" : 7500000,
    "stok" : 10
}
let productJSON = JSON.stringify(product);
console.log(productJSON);
console.log(typeof(productJSON));

// 3.
let belanja = [
    {"nama" : "Beras", "harga" : 12000, "jumlah" : 2},
    {"nama" : "Minyak Goreng", "harga" : 15000, "jumlah" : 1},
    {"nama" : "Gula", "harga" : 13000, "jumlah" : 1}
]
let belanjaJSON = JSON.stringify(belanja);
console.log(belanjaJSON);
console.log(typeof(belanjaJSON));

// JSON.parse()
// 4.
let Data = `{
    "nama" : "Budi",
    "usia" : 21,
    "status" : "Mahasiswa"
}`;
let budi = JSON.parse(Data)
console.log(budi.nama);
console.log(typeof budi);

// 5.
let Buah = `[
     {"nama": "apel"}, 
     {"nama": "jeruk"}, 
     {"nama": "pisang"}
]`;
let BuahJSON = JSON.parse(Buah);
BuahJSON.forEach((item)=> console.log(item.nama));


// 6.
let Mobil = {
    "merk" : "Honda",
    "model" : "Civic",
    "tahun" : 2022
}
for (let key in Mobil) {
    console.log(`${key}: ${Mobil[key]}`);
}

// Callback function
// 7.
function sapaUser(nama, Callback){
    console.log(`Halo, ${nama}`);
    Callback();
}
function selesai(){
    console.log("Selamat Belajar JSON!");
}
sapaUser("Budi", selesai);

// 8.
function hitungLuas(panjang, lebar, Callback){
    let Luas = panjang * lebar;
    Callback(Luas);
}
function tampilkanLuas(Luas){
    console.log(`Luasnya adalah: ${Luas}`);
}
hitungLuas(5, 10, tampilkanLuas);

// 9.
function prosesData(data, Callback){
    if (Array.isArray(data)) {
        Callback(data.length);
    } else {
        Callback("Data bukan array");
    }
}
function tampilkanHasil(hasil){
    console.log(`Hasil: ${hasil}`);
}
prosesData([1, 2, 3, 4, 5], tampilkanHasil);
prosesData("Hello", tampilkanHasil);

// Callback Anonim
// 10.
function sapaUser(nama, Callback){
    console.log(`Halo, ${nama}`);
    Callback();
}
sapaUser("Aisyah", function(){
    console.log("Sampai Jumpa!");
});

// 11.
function kirimPesan(pesan, Callback) {
    pesan = pesan.toUpperCase();
    console.log(`Mengirim pesan: ${pesan}`);
    Callback();
}
kirimPesan("selamat pagi", function() {
    console.log("pesan terkirim")
})

// Callback timeout
// 12.
function prosesAsync(Callback) {
    setTimeout(() => {
        Callback();
    }, 2000);
}
prosesAsync(function() {
    console.log("Proses setelah 2 detik selesai");
});

// 13.
function ambildata(Callback) {
    setTimeout(() => {
        Callback();
    }, 3000);
}
ambildata(function(){
    let data = { id : 1, nama: "Laptop" };
    console.log(data);
})

