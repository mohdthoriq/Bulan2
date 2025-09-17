<img src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" style="height:204px;margin-right:32px"/>
<div style="font-family: 'Arial', sans-serif;">

# Soal Latihan JSON & callback (Day 2 Pekan 3 Bulan 2)

# 📝 Latihan Soal JSON & Callback

Berikut 13 soal study kasus sesuai materi hari ini:

## 🔹 JSON.stringify (3 Soal)

1. Buat sebuah object berisi data siswa (`nama`, `umur`, `jurusan`).  
   Ubah object tersebut menjadi JSON string dengan **JSON.stringify**.  
   Clue: pakai `JSON.stringify(object)`

2. Kamu punya object:
   { produk: "Laptop", harga: 7500000, stok: 10 }  
   Gunakan **JSON.stringify** dan tampilkan hasilnya di console.

3. Buat array of object berisi minimal 2 barang belanjaan (`nama`, `jumlah`, `harga`).  
   Ubah seluruh array tersebut ke JSON string dan tampilkan hasilnya.  
   Clue: array of object → JSON.stringify

---

## 🔹 JSON.parse (3 Soal)

4. Diberikan string JSON:  
   {"nama":"Budi","usia":21,"status":"Mahasiswa"}  
   Parse JSON ini dan tampilkan **nama** dan **status** di console.  
   Clue: pakai `JSON.parse()`

5. Kamu punya JSON string berisi array:  
   ["apel","jeruk","pisang"]  
   Parse JSON string tersebut lalu looping hasilnya pakai **forEach** untuk menampilkan semua buah.

6. Buat string JSON berisi object:  
   { "merk": "Honda", "model": "Civic", "tahun": 2022 }  
   Parse string JSON itu lalu tampilkan semua **key** dan **value** menggunakan **for...in loop**.

---

## 🔹 Callback Sederhana (3 Soal)

7. Buat fungsi `sapaUser(nama, callback)` yang mencetak:  
   "Halo <nama>"  
   lalu jalankan callback untuk menampilkan `"Selamat belajar JSON!"`.  
   Clue: callback dipanggil di dalam fungsi.

8. Buat fungsi `hitungLuas(panjang, lebar, callback)`.  
   Callback digunakan untuk menampilkan hasil luas (`panjang * lebar`).

9. Buat fungsi `prosesData(data, callback)`.  
   Jika `data` adalah array, callback dipanggil untuk menampilkan jumlah item array.  
   Clue: gunakan `array.length`

---

## 🔹 Callback Anonim (2 Soal)

10. Panggil fungsi `sapaUser("Aisyah", ...)` dengan callback anonim  
    yang langsung menampilkan `"Sampai jumpa!"` di console.  
    Clue: `function() { ... }`

11. Buat fungsi `kirimPesan(pesan, callback)`  
    lalu panggil dengan callback anonim untuk mencetak pesan yang diterima dalam huruf **besar**.  
    Clue: `string.toUpperCase()`

---

## 🔹 Callback Timeout (2 Soal)

12. Buat fungsi `prosesAsync(callback)` yang menunggu 2 detik (`setTimeout`)  
    lalu memanggil callback dengan pesan `"Proses selesai setelah 2 detik"`.

13. Buat fungsi `ambilData(callback)`  
    gunakan `setTimeout` 3 detik sebagai simulasi ambil data dari server.  
    Setelah selesai, callback dipanggil dengan data: `{ id: 1, nama: "Laptop" }`.
