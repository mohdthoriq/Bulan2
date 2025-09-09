# 📘 Catatan Belajar Array & Looping di JavaScript

## Array Dasar
```js
let mobil = [
    'avanza',
    'crv',
    'fortuner',
    'brio'
];

console.log(mobil);

for (let i = 0; i < mobil.length; i++) { // mobil.length adalah sesuai jumlah dalam array mobil
    console.log(mobil[i]);
}
for (let i = 0; i < mobil.length; i++){
    if (mobil[i] == 'crv') {
        console.log(`crv ada di index ke ${i}`);
    }
}

console.log(mobil.indexOf('fortuner')); // untuk melihat no gerbong index
console.log(mobil.includes('fortuner')); // untuk melihat apakah di array mobil ada 'fortuner'
for (let i = 0; i < mobil.length; i++) {
    if (mobil[i] == 'fortuner') {
        console.log(`fortuner ada di index ke ${i}`);
        break; // untuk menghentikan looping
        i += mobil.length; // memanipulasi i supaya loop berhenti juga
    } else {
        console.log('fortuner tidak ada'); 
    }
}
```
[^7]

###**Array dalam Array**


```javascript

let A = 'apel';
let buah = [
    'semangka',
    'anggur',
    'mangga',
    ['jeruk','manggis',['durian']],
    A
]

// console.log(buah[3][2][0]); 
// cara ngambil value array yang berada di dalam array
// array tersebut ada di index ke berapa[] dan value tersebut ada di index ke berapa[].

function renderArray(array) {
    let hasil = ''; // supaya bisa diakses sama semua scope dalam function ini
    let hasil2 = []; 
     if (Array.isArray(buah)) { // jika buah adalah array = true 
         for (let start = 0; start < array.length; start++) {
            // hasil += `${buah[start]}\n` // hasil = hasil + buah[0,1,2,3,4]
            hasil2.push(buah[start]); // memasukkan value ke dalam array hasil2
         }
    }
    return hasil2; // outputnya hasil2
}
console.table([renderArray(buah)]);

function renderArray3(array) {
    let hasil = '';
    let hasil2 = []; // wadah kosong untuk menyimpan hasil
     if (Array.isArray(buah)) { // jika buah adalah array = true 
         for (let start = 0; start < array.length; start++) { // loop array
            if (Array.isArray(buah[start])) { // jika di dalam array ada array lain
                for (let start2 = 0; start2 < buah[start].length; start2++) { // loop array level 2
                    if (Array.isArray(buah[start][start2])) { // jika ada array level 3
                        for (let start3 = 0; start3 < buah[start][start2].length; start3++) { // loop array level 3
                            hasil2.push(buah[start][start2][start3]); // masukin hasil ke array hasil2
                        }
                    } else { 
                        hasil2.push(buah[start][start2]); // kalau gak ada array level 3
                    }
                }
            } else { 
                hasil2.push(buah[start]); // kalau gak ada array level 2
            }
        
         } 
    } else { 
        return 'bukan array';
    }
    return hasil2; // output hasil2
}
console.table(renderArray3(buah));
```
[^7]

###**contoh array dan for**

```javascript

const products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headset", "Webcam"];
console.table(products);

console.log(products[0]); // Output: Laptop
console.log(products.length); // Output: 6

for (let i = 0; i < products.length; i++) { 
    // start = 0; 
    // kondisi: i < panjang array; 
    // jika true, maka jalankan aksi lalu increment
    console.log(`${i + 1}. ${products[i]}`); // tampilkan index dan isi
}
```
[^7]

###**Fibonance**

```javascript

let fibonance = [0, 1];
for (let i = 0; i < 10; i++) { // start = 0; 0 lebih kecil dari 10; akan ditambah 1
    fibonance.push(fibonance[i + 1] + fibonance[i]); 
    // masukkan (fibonance[i+1] + fibonance[i]) ke dalam array fibonance
    console.table([fibonance]);
}
```
[^7]
## Array Method

###**pop**

```javascript

let color = ["red", "green", "blue"];
console.table(color);

const removedColor = color.pop(); // menghapus elemen terakhir dari array
console.table(removedColor); // data yang dihapus
```
[^7]

###**forEach**

```javascript

const numbers = [1, 2, 3, 4, 5];

// cara forEach simple
numbers.forEach(function(a, b, c) { // a = item, b = index, c = array
    console.log(c); // menampilkan seluruh isi array
    console.log(`index ke.${b} adalah ${a}`);
});

// cara forEach yang memisahkan function
function print(a, b, c) {
    console.log(`index ke.${b} adalah ${a}`);
}
numbers.forEach(print); // yang di dalam kurung adalah function()
```
[^7]

###**includes: chek data ada/tidak**

```javascript

const cities = ["Jakarta", "Surabaya", "Bandung"];
console.log(cities.includes("Surabaya")); // Output: true
console.log(cities.includes("Medan")); // Output: false
```
[^7]

###**unshift() tamabah data diawal array**

```javascript


const tasks = ["Coding", "Testing"];
tasks.unshift("Planning"); // tambah di index 0
console.log(tasks); // Output: ["Planning", "Coding", "Testing"]
```
[^7]

###**shift() menghapus data diawal array**

```javascript


const queue = ["Pertama", "Kedua", "Ketiga"];
const firstItem = queue.shift(); // hapus index 0
console.log(firstItem); // Output: "Pertama"
console.log(queue); // Output: ["Kedua", "Ketiga"]
```
[^7]

###**indexOf() mencari index sebuah data didalam array**

```javascript


const animals = ["kucing", "anjing", "kelinci"];
console.log(animals.indexOf("anjing")); // Output: 1
console.log(animals.indexOf("hamster")); // Output: -1 (tidak ada)

