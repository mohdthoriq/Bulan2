<img src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" style="height:204px;margin-right:32px"/>
<div style="font-family: 'Arial', sans-serif;">

---
# 📝 Latihan Soal Async/Await & Error Handling (day 4 week 3 month 2)

## 🔹 Level 1 – Dasar Async/Await (5 Soal)

1. **Fungsi Async Sederhana**  
   Buat fungsi `helloAsync` dengan `async` yang mengembalikan string `"Halo dari Async"`.  
   Panggil fungsi itu dan tampilkan hasilnya ke console.

2. **Await di dalam Fungsi**  
   Buat fungsi `ambilData()` yang mengembalikan Promise dengan `setTimeout` selama 2 detik, lalu resolve `"Data berhasil diambil"`.  
   Gunakan `await` untuk mengambil hasilnya dan tampilkan ke console.

3. **Return Number**  
   Buat fungsi async `getNumber` yang langsung return angka 42.  
   Panggil dengan `await` dan tampilkan hasilnya.

4. **Chaining dengan Async**  
   Buat fungsi `tambahLima(x)` yang return Promise dengan hasil `x + 5`.  
   Panggil di fungsi async `main()` dengan input angka 10, lalu tampilkan hasil akhirnya.

5. **Error Default**  
   Buat fungsi async `throwError()` yang langsung melempar error `"Terjadi kesalahan"`.  
   Tangkap error tersebut menggunakan `try...catch`.

---

## 🔹 Level 2 – Error Handling & Fetch API (5 Soal)

6. **Fetch API Sederhana**  
   Gunakan `async/await` untuk mengambil data dari:  
   `https://equran.id/api/v2/surat/1`  
   Tampilkan nama surat (`namaLatin`) ke console.

7. **Error Handling Fetch**  
   Ubah soal 6. Jika `response.ok === false`, lempar Error baru dengan pesan `"Gagal mengambil data"`.  
   Tangkap error menggunakan `try...catch`.

8. **Finally di Async/Await**  
   Ubah soal 7, tambahkan blok `finally` untuk menampilkan `"Proses selesai"` apapun hasilnya.

9. **Parsing JSON**  
   Ambil data dari `https://equran.id/api/v2/tafsir/112` dengan `async/await`.  
   Looping hasil `tafsir` per ayat lalu tampilkan ke console.

10. **Simulasi Error JSON**  
    Buat fetch API ke URL yang salah (contoh: `https://equran.id/api/v2/surattidakada`).  
    Pastikan error ditangkap di `catch` dan cetak pesan errornya.

---

## 🔹 Level 3 – Promise Variants dengan Async (5 Soal)

11. **Promise.all dengan Async**  
    Gunakan `Promise.all` + `await` untuk mengambil data dari 2 API:
    - `https://equran.id/api/v2/surat/1`  
    - `https://equran.id/api/v2/surat/112`  
    Tampilkan namaLatin kedua surat.

12. **Promise.race dengan Async**  
    Buat dua Promise dengan `setTimeout`: satu selesai dalam 1 detik, satu lagi 3 detik.  
    Gunakan `Promise.race` untuk menampilkan hasil tercepat.

13. **Promise.allSettled dengan Async**  
    Gunakan `Promise.allSettled` untuk memanggil 3 Promise:
    - Satu resolve `"Data 1"`  
    - Satu resolve `"Data 2"`  
    - Satu reject `"Error 3"`  
    Tampilkan status masing-masing.

14. **Parallel Fetch dengan Promise.all**  
    Ambil data dari 3 API `surat`, `asmaulhusna`, dan `arbain` menggunakan `Promise.all` + `await`.  
    Tampilkan jumlah data dari masing-masing API.

15. **Custom Error Handling**  
    Buat fungsi `fetchSurat(id)` dengan `async` untuk ambil data surat berdasarkan `id`.  
    Jika `id` bukan angka, lempar Error `"ID surat harus angka"`.  
    Tangkap error ini di `try...catch`.
