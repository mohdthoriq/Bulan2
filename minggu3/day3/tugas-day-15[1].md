<img src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" style="height:204px;margin-right:32px"/>
<div style="font-family: 'Arial', sans-serif;">

# 📝 Studi Kasus Promise (Day 3 Pekan 3 Bulan 2)

---

## 🔹 Level 1: Dasar-dasar Promise (Kasus 1-3)

### **Studi Kasus 1: Promise Sederhana**
**Tugas:**  
Buat fungsi yang mengembalikan sebuah **Promise**.  
- Gunakan `setTimeout` untuk simulasi proses 2 detik.  
- Setelah selesai, panggil `resolve("Operasi berhasil!")`.  
- Tangani dengan `.then()` untuk mencetak hasil.

---

### **Studi Kasus 2: Menangani Kegagalan**
**Tugas:**  
Ubah studi kasus 1.  
- Tambahkan variabel `sukses = true/false`.  
- Jika `sukses === true`, panggil `resolve("Data berhasil diproses")`.  
- Jika `sukses === false`, panggil `reject("Operasi gagal")`.  
- Tangani error dengan `.catch()`.

---

### **Studi Kasus 3: Chaining Promise**
**Tugas:**  
Buat rantai Promise:  
1. Promise pertama `resolve(5)` setelah 1 detik.  
2. `.then()` pertama → kalikan angka dengan 2.  
3. `.then()` kedua → tambahkan 10.  
4. `.then()` ketiga → cetak hasil akhirnya ke console.  

---

## 🔹 Level 2: Fetch & API (Kasus 4-6)

### **Studi Kasus 4: Ambil Data dari API**
**Tugas:**  
Gunakan `fetch("https://equran.id/api/v2/surat/114")`.  
- Konversi response ke JSON dengan `.json()`.  
- Cetak seluruh data ke console.

---

### **Studi Kasus 5: Penanganan Error pada Fetch**
**Tugas:**  
Ubah studi kasus 4.  
- Jika `!response.ok`, **throw Error("API gagal diambil")**.  
- Tangani error dengan `.catch()` dan cetak pesan error.

---

### **Studi Kasus 6: Gunakan `.finally()`**
**Tugas:**  
Ubah studi kasus 5.  
- Tambahkan `.finally()` di akhir untuk mencetak `"Proses selesai, apapun hasilnya"`.  
- Simulasi skenario loading spinner.

---

## 🔹 Level 3: Varian Promise (Kasus 7-8)

### **Studi Kasus 7: Balapan API dengan `Promise.race()`**
**Tugas:**  
Ada 2 API:  
- `https://api.myquran.com/v2/husna/semua`  
- `https://api.myquran.com/v2/hadits/arbain/semua`  
Gunakan `Promise.race()` untuk menampilkan hasil dari API yang lebih cepat.

---

### **Studi Kasus 8: Semua Hasil dengan `Promise.allSettled()`**
**Tugas:**  
Panggil 3 API berikut dengan `Promise.allSettled()`:  
1. `https://api.myquran.com/v2/quran/surat/semua`  
2. `https://api.myquran.com/v2/husna/semua`  
3. `https://api.myquran.com/v2/husna/salah` (API salah untuk memicu error)  

Cetak `status` masing-masing Promise: `fulfilled` atau `rejected`.

---

## 🔹 Level 4: Aplikasi Praktis (Kasus 9-10)

### **Studi Kasus 9: Mini Dashboard API**
**Tugas:**  
Buat fungsi dashboard:  
1. Ambil data dari 3 API (`surat`, `asmaulhusna`, `arbain`) sekaligus.  
2. Gunakan `Promise.all()` untuk menunggu semuanya sukses.  
3. Jika berhasil → cetak `"Dashboard siap!"` + datanya.  
4. Jika salah satu gagal → cetak `"Gagal memuat dashboard."`.

---

### **Studi Kasus 10: Membatasi Waktu dengan Timeout**
**Tugas:**  
Simulasikan balapan antara fetch API dan timeout:  
- Buat `fetch("https://equran.id/api/v2/surat/1")`.  
- Buat Promise timeout 5 detik (`setTimeout`).  
- Gunakan `Promise.race()` antara fetch dan timeout.  
- Jika timeout menang → cetak `"Timeout: API terlalu lama"`.  
- Jika fetch lebih cepat → tampilkan data.

---
