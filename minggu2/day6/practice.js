// ini adalah sebauh array
// array adalah struktur data yang ketika akan kita akses dengan indeks(numberik)
let mobil = [
    'avanza',
    'crv',
    'fortuner',
    'brio'
];

console.log(mobil);

// ini adalah looping / perulangan / iterasi
// tapi for adalah sistem pengulangan untuk yang sudah terukur berapa banyak kita akan mengulang
for (let i = 0; i < mobil.length; i++) {
    console.log(mobil[i]);
}

// ini adalah percabangan jika-maka aksi
if (kondisi == true ) {
    // aksi apa yang akan dijalankan ketika kondisi true
} else {
    // aksi apa yang akan dijalankan ketika kondisi false
}

// ini adalah looping / perulangan / iterasi
// disini didalam aksi kita suda memasukkan if kedalam for artinya setiap loopingan akan ada percabangan aksi 
for (let i = 0; i < mobil.length; i++) {
    if (mobil[i] == 'fortuner') {
        console.log(`fortuner ada di index ke ${i}`);
        break; // untuk menghentikan looping
    } else {
        console.log('fortuner tidak ada'); 
    }
}

// ini array didalam array
// didalam sebuah array itu bisa diletak semua typedata
let A = 'apel'
let buah = [
    'semangka',
    'anggur',
    'mangga',
    ['jeruk','manggis',['durian']],
     A
]
console.log(buah[3][2][0]); // cara ngambil yang value array yang berada di dalam array // array tersebut ada di indexx ke berapa[] dan value tersebut ada di index ke berapa[].
// ini cara untuk loopingan untuk mengeluarkan semua isi array
 function renderArray3(array) {
    let hasil = '';// supaya bisa diakses sama semua scoope didalam functuion ini
    let hasil2 = []; // sebuah wadah kosong untuk menyimpan hasil [array[2][3]];
     if (Array.isArray(buah)) { // jika buah adalah array = true 
         for (let start = 0; start < array.length; start++) { // karena array jadi dibuat array
            if (Array.isArray(buah[start])) { // jika didalam array tersebut ada array2 
                for (let start2 = 0; start2 < buah[start].length; start2++) { // karena ada array2 maka diloop/dicek data array2
                    if (Array.isArray(buah[start][start2])) { // jika didalam array2 ada array3
                        for (let start3 = 0; start3 < buah[start][start2].length; start3++) { // karena ada array3 maka diloop/dicek data array3
                            hasil2.push(buah[start][start2][start3]);// data array2 dan array3 dimasukkan ke dalam array
                        } // array3
                    } else { // jika tidak ada array3 maka data buah dimasukkan ke array 
                        hasil2.push(buah[start][start2]);
                    }
                } // array2
            } else { // jika tidak ada array2 maka data buah dimasukkan ke array 
                hasil2.push(buah[start]);
            }
        
         } // array
    } else { // jika bukan array maka jalankan ini
        return 'bukan array';
    }
    return hasil2;// output nya hasil2 (hasil2 adalah sebuah array yang tadi sudah diisi oleh [array[2][3]])
}
console.table(renderArray3(buah))

// loop mengubah nama dalam array

// forEach adalah build in function untuk melakukan loopingan sekali
// klo for akan terrus mengulang sampai kondisi false baru berhenti
let product2 = ['laptop','mouse','keyboard']
console.table(product)  

// disini sudah masuk function atau fungsi 

// basic function
function ubah(a, b, c){ // isi a itu adalah item, isi b adalah index, isi c adalh array itu sendiri
    product[b] = `edit ${a}`;
    console.table(c);
}
product.forEach(ubah)
console.table(product)
// ini cara closure function
product.forEach(function(a, b, c) {
    product[b] = `tes ${a}`;
    console.table(c);
})
console.table(product)

// disini adalah object 
// object adalah sturktur data yang berpasangan atau disebut property yaitu key = value, cara mengakses nya adalh dengan mengambil key nya  
let obj1 = {
    "Key1": "Value1",
    "Key2": "Value2",
    "Key3": "Value3",
    "sopo": "Bambang",
}

let arr = [0, 5, 62, 26, 64,];

arr[2] = "Edit 62";

// Inisialiasi Ulang
obj1.sopo = "Edit Bambang";
obj1['sopo'] = "Edit Lagi Bambang";

// Add Property for Object {}
obj1.key4 = "Zidanucup";
obj1['key5'] = "Ucupzidan";

// Add Property for Array []
arr[5] = "Value Index 5";
arr.push("Value 6");

// ini semua adalah build in function beserta penjelasannya
// slice
let buah5 = ['kiwi','strawberry','anggur','mangga']
let con = buah5.slice(1,3)// me slice atau memilih (start(index), length(panjang keberapa))
console.log(con)


// splice()  Hapus/tambah elemen di index tertentu  | `[1,2,3,4].splice(1,2)` (index(?), length(?))  | `[1,4]`      
let nama = ['irgi','kahfi','farid']
nama.splice(1,2) // (index(?), length(?))
console.log(nama);



// loop mengubah nama dalam array

// forEach
let product = ['laptop','mouse','keyboard']
console.table(product)  
// basic function
function ubah(a, b, c){ // isi a itu adalah item, isi b adalah index, isi c adalh array itu sendiri
    product[b] = `edit ${a}`;
    console.table(c);
}
product.forEach(ubah)
console.table(product)
// ini cara closure function
product.forEach(function(a, b, c) { 
    product[b] = `tes ${a}`;
    console.table(c);
})
console.table(product)
// for 
for (let i = 0; i < product.length; i++) { // (kondisi) = start = 0; kondisinya 0 < ??; 0 ++/0 --
    product[i] = `for ${product[i]}`
}
console.table(product)


// push (tambah data didalam array yang index terakhir)
product.forEach(function(a, b, c){
    product.push(`tambah pake .push di foreach ${a}`)
});

console.table(product)

// pop pake for.Each
product.forEach(function(a, b, c){
    c.pop() // data yang dihapus pakke pop adalah index terakhir
});

console.table(product)


// unshift (menambah data array di inde awal)
product.unshift('tv','ac')
console.table(product)

// shift (menghapus data awal index)
product.shift() // yang dihapus x bisa lebih dari 1 item jadi klo mau hapus lagi tulis .shift lagi
console.table(product)

// map() membuat array baru denagn hasil transformasinya
let harga = [10000,20000,30000]
let har2 = harga.map(function(a,b,c) {
    return a * 2;
})
console.log(har2)
//Perbandingan dengan forEach
// forEach → buat looping doang (nggak return array baru).
// map → buat transformasi → selalu menghasilkan array baru.



// destructing array
let huruf = [1, 3, 5, 7]
let [x, y, z, t] = huruf
console.log(x) // output 1
console.log(y) // output 3
console.log(z) // output 5
console.log(t) // output 7

// spread menggabungkan 2 array menjadi satu
let angka = [1, 2, 3, 4]
let we = [7,8,9,10]
let gabung = [...angka,5,6,...we]
console.log(gabung);// output 1,2,3,4,5,6,7,8,9,10



// reduce()
let penjualan = [3,2,7,5,6]
let totalpenjualan = penjualan.reduce(function(a,b,c,d) { // a =(0) accumulator, b = value, c = index, d = array
    console.log(`${c}. ${a} + ${b} = ${a + b} => ${d}`) // akan mengulang terus sebanyak (array).length
    return a + b;// mengembalikan nilai akumulator selanjutnya // ketika return itu a + b maka accumulator selanjutnya akan di tambah
},14)// inisial accumulator awal

// includes() cek apakah didalam array ada ada elemen(?) tertentu
console.log(huruf.includes(2));// outputnya boolean false
console.log(huruf.includes(7));// outputnya boolean true


// study case reduce()
let teman = [1,2,3,4,5,6,7,8,9]
let total = teman.reduce(function(a,b) {
    console.log(`${a} + ${b} = ${a + b}`);
    return a;    
},1)



// sort() // mengurutkan array sesuai string
let coba = [13,45,14,2,5]
coba.sort(function(a,b){
    return a - b; // a - b = klo angka dia akan dari angka kecil kebesar. klo b -a berarti dia akan mengeluarkan angka dari besar ke kecil dalam array
})
console.log(coba)
// sort dengan cara simple
coba.sort((a,b) => b-a)
console.log(coba)


// filter : menyaring yang ada didalam array sesuai kondisi

// rumus nya : 
// let ?? = Array.filter(function(a,b,c) { // a = element, b = index, c = array
//     return kondisi;
// })
// cara pertama yang basic
let nilai = [1,4,10,15,98,100]
let nilai2 = nilai.filter(function(a,b,c) {
    return a <= 10;
})
console.log(nilai2)
// cara ke 2 lebih simple
let nilai3 = nilai.filter(n => n % 2 != 0)
console.log(nilai3)

// find () : mencari element/value pertama yang cocok dengan kondisi
// let rumus = Array.find(funtion(Element, index, array) {
//     return kondisi;
// })
// cara pertama yang basic
let Exfind = nilai.find(function(a,b,c) {
    return a > 12;
})
console.log(Exfind);// outputnya 15 karena itu angka pertam yang diatas 12, 98 & 100 dilewati
// cara simple 
let Ex2 = nilai.find(n => n > 12)
console.log(Ex2)

// some() // akan mengecek apakah salah satu dari itu ada yang memenuhi kondisi
// let rumus = array.some(function(element,index,array) {
//     return kondisi;
//})
let Exsome = nilai.some(function(a,b,c){
    return a == 10;
})
console.log(Exsome)// output adalah bolean true/false jika kondisi memenuhi maka true jika tidak false
//
let Exsome1 = nilai.some(function(a,b,c){
    return a < 5;
})
console.log(Exsome1)
//
let Exsome2 = nilai.some(function(a,b,c){
    return a % 2 != 0; 
})
console.log(Exsome2);// true // karena ada salah satu element ynag memenuhi kondisi


// every() jika seluruh element array memenuhi kondisi tersebut
let Exevery = nilai.every(function(a,b,c,) {
    return a % 5 == 0;
})
console.log(Exevery)// outputnya boolean // jika didaalam array tersebut memenuhi kondisi.
//
let Exevery1 = nilai.every(function(a,b,c,) {
    return a <= 100;
})
console.log(Exevery1)
// cara simple
let Exevery2 = nilai.every(n => n == 100) // langsung ke element dan kondisi 
console.log(Exevery2)


// findindex() menampilkan index elemen pertama yang sesuai kondisi
// let rumus = array.findindex(function(a,b,c) {
//     return kondisi;
//})
let Exfindindex = nilai.findIndex(function(a,b,c) {
    return a == 99;
})
console.log(Exfindindex) // outputnya adalah index elemen pertama yang memenuhi kondisi// jika tidak ada yang sesuai maka hasilny akan -1
// cara simple
let simfindindex = nilai.findIndex(n => n == 100)
console.log(simfindindex) // outputnya 5 // karena 100 ada di index ke 5


// flat() meratakan array bersarang atau array didalam array
let buah2 = ['manggis','mangga','apel','jeruk',['pisang','rambutan','semangka']]
let gabuah = buah2.flat();// menjadikan array yang didalam hilang, jadi isinya gabung
console.log(gabuah)


// map() membuat array baru dan array baru itu adalah hasil proses function map
let Exmap = nilai.map(function(a,b,c) {
    return a * 2; // array baru setiap element dikalikan 2
})
console.log(Exmap)
// cara simple
let Exmap2 = nilai.map(n => [n * 5])// setiap element dikali 5 dan bisa dikasih kurung array setiap habis dikali
console.log(Exmap2)// output [ [],[],[] ]didalam array ada array dan isinya array adalah hasil proses map


// flatmap() gabungan flat dan map, flat untuk meratakan setiap array yang didalam array hasil proses map
let Exflatmap = nilai.flatMap(function(a,b,c) {
    return a * 2;
})
console.log(Exflatmap) // output nya adalah isi array seperti map tapi yang tidak menggunakan kurung siku/array.
// cara simple
let Exflatmap2 = nilai.flatMap(n => [n * 5])// sekalipun diberi kurung array seperti map tapi tidak keluar di output sebab sudah pake flat
console.log(Exflatmap2)