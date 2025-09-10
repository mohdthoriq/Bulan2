📌 Tabel Ringkasan Lengkap Fungsi Array

| Fungsi              | Kegunaan                                         | Contoh                               | Hasil               |
| ------------------- | ------------------------------------------------ | ------------------------------------ | ------------------- |
| **push()**          | Tambah elemen di akhir array                     | `[1,2].push(3)`                      | `[1,2,3]`           |
| **pop()**           | Hapus elemen di akhir array                      | `[1,2,3].pop()`                      | `[1,2]`             |
| **unshift()**       | Tambah elemen di awal array                      | `[2,3].unshift(1)`                   | `[1,2,3]`           |
| **shift()**         | Hapus elemen di awal array                       | `[1,2,3].shift()`                    | `[2,3]`             |
| **splice()**        | Hapus/tambah elemen di index tertentu            | `[1,2,3,4].splice(1,2)`              | `[1,4]`             |
| **slice()**         | Ambil sebagian array (tidak ubah array asli)     | `[1,2,3,4].slice(1,3)`               | `[2,3]`             |
| **concat()**        | Gabungkan dua array                              | `[1,2].concat([3,4])`                | `[1,2,3,4]`         |
| **join()**          | Ubah array jadi string dengan pemisah            | `["a","b","c"].join("-")`            | `"a-b-c"`           |
| **indexOf()**       | Cari index elemen (pertama)                      | `[10,20,30].indexOf(20)`             | `1`                 |
| **lastIndexOf()**   | Cari index elemen (terakhir)                     | `[1,2,3,2].lastIndexOf(2)`           | `3`                 |
| **includes()**      | Cek apakah ada elemen tertentu                   | `[1,2,3].includes(2)`                | `true`              |
| **forEach()**       | Loop tiap elemen array (tanpa return array baru) | `[1,2,3].forEach(x=>console.log(x))` | cetak `1 2 3`       |
| **map()**           | Buat array baru hasil transformasi tiap elemen   | `[1,2,3].map(x=>x*2)`                | `[2,4,6]`           |
| **filter()**        | Buat array baru dari elemen yang lolos tes       | `[1,2,3,4].filter(x=>x%2==0)`        | `[2,4]`             |
| **find()**          | Ambil **1 elemen pertama** yang cocok            | `[1,2,3,4].find(x=>x>2)`             | `3`                 |
| **findIndex()**     | Ambil index dari elemen pertama yang cocok       | `[1,2,3,4].findIndex(x=>x>2)`        | `2`                 |
| **some()**          | Cek apakah **ada minimal 1** elemen yang cocok   | `[1,2,3].some(x=>x>2)`               | `true`              |
| **every()**         | Cek apakah **semua** elemen cocok                | `[1,2,3].every(x=>x>0)`              | `true`              |
| **reduce()**        | Gabungkan semua elemen jadi 1 nilai              | `[1,2,3,4].reduce((a,b)=>a+b,0)`     | `10`                |
| **reduceRight()**   | Sama kayak `reduce` tapi dari kanan ke kiri      | `[1,2,3].reduceRight((a,b)=>a-b)`    | `0` (hitung: 3-2-1) |
| **sort()**          | Urutkan array (default string)                   | `[3,1,2].sort()`                     | `[1,2,3]`           |
| **reverse()**       | Balik urutan array                               | `[1,2,3].reverse()`                  | `[3,2,1]`           |
| **flat()**          | Meratakan array bersarang 1 level                | `[1,[2,3],[4]].flat()`               | `[1,2,3,4]`         |
| **flatMap()**       | `map()` lalu `flat()` sekaligus                  | `[1,2,3].flatMap(x=>[x,x*2])`        | `[1,2,2,4,3,6]`     |
| **Array.from()**    | Bikin array dari objek mirip array/string        | `Array.from("abc")`                  | `["a","b","c"]`     |
| **Array.isArray()** | Cek apakah nilai itu array                       | `Array.isArray([1,2,3])`             | `true`              |


👉 Jadi tabel ini sudah mencakup:

1. Tambah/Hapus (push, pop, shift, unshift, splice)

2. Ambil/Potong (slice, concat, join, flat, flatMap)

3. Cari & Cek (indexOf, lastIndexOf, includes, find, findIndex, some, every)

4. Looping & Manipulasi (forEach, map, filter, reduce, reduceRight)

5. Urut & Balik (sort, reverse)

6. Lainnya (Array.from, Array.isArray)