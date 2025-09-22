// 1. perbedaan teori dasar function callback dan promise
function  callback ialah memanggil function lain kedalam sebuah function
promise adalah sistem async yang membeeri 2 pilihan resolve dan reject

// 2.
karena secara syntac lebih enak dan mudah untuk dibaca.

// 3.
fungsi try adalah untuk mencoba apakah API yang kita letak disitu beneran ada isi atau nggak jika ada  tampillkan sesuai dengan yang kita minta ntah itu data/namaLatin dsb.
fungsi catch itu untuk yang keadaan apabila API yang kita masukkan itu kosong atau salah makan yang akan dijalan kan adalah blockscoope nya catch.
```js
function tambah(a, b) {
    return new Promise((resolve) => {
    setTimeout(() => {
            resolve(a + b)
    }, 2000)}
    )
}

async function hitung() {
    try {
        let hasil = await tambah(30, 40)
        console.log("hasilnya ", hasil)
    } catch(e) {
        console.error("eror", e)
    }
}
hitung()
```

// 4.
json stringify adalah untuk merubah suatu object menjadi sebuah string
json parse mengubah string object menjadi object
```js
// JSON.stringify()
let belanja = [
    {"nama" : "Beras", "harga" : 12000, "jumlah" : 2},
    {"nama" : "Minyak Goreng", "harga" : 15000, "jumlah" : 1},
    {"nama" : "Gula", "harga" : 13000, "jumlah" : 1}
]
let belanjaJSON = JSON.stringify(belanja);
console.log(belanjaJSON);
console.log(typeof(belanjaJSON));

// JSON.parse()
let Data = `{
    "nama" : "Budi",
    "usia" : 21,
    "status" : "Mahasiswa"
}`;
let budi = JSON.parse(Data)
console.log(budi.nama);
console.log(typeof budi);
```

// 5.
klo dalam 1 file dia akan menyusahkan bila terjadi bug, kita akan susah mencari file tersebut ada baris ke berapa.juga akan menyusah kan start up lain apabila akan menggantikan kita mengurus data filenya.
ketika kita pecah kita akan lebih mudah / mempersempit masalah yaitu yang harusnya kita lama nyari akan lebih hemat  waktu karen kita sudah tau kalo baris bug tersebut disistem yang mana.

