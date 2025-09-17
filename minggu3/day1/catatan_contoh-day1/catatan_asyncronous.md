# Belajar Asynchronous JavaScript Lengkap

## Apa itu Asynchronous?

Asynchronous adalah cara kerja program supaya tidak harus menunggu satu tugas selesai dulu sebelum melanjutkan ke tugas berikutnya. Dengan asynchronous, program bisa melakukan beberapa hal sekaligus dan jadi lebih cepat serta responsif.

Bayangkan kamu pesan makanan dan sedang menunggu di restoran. Kamu tidak hanya diam menunggu makanan selesai dibuat, tapi bisa sambil ngobrol atau melakukan hal lain. Setelah makanan siap, kamu baru ambil makanannya. Itu konsep asynchronous: nggak perlu berhenti menunggu, tapi terus bergerak sambil menunggu hasil tugas lain.

---

## Kenapa Asynchronous Penting?

JavaScript itu cuma bisa menjalankan satu tugas dalam satu waktu (single-threaded). Kalau jalannya pakai cara lama (synchronous), program berhenti di satu tugas sampai tugas itu selesai dulu. Ini bikin aplikasi jadi lambat dan kurang responsif.

Asynchronous membuat program jadi *non-blocking*: bisa kerjakan tugas lain sambil menunggu tugas yang lama selesai, misalnya minta data dari server, baca file, atau proses jaringan.

---

## 1. Promise: Resolve dan Reject

Promise adalah janji yang akan memberikan hasil di masa depan tentang sebuah operasi asynchronous, bisa sukses (*resolve*) atau gagal (*reject*).

```js
const janji = new Promise((resolve, reject) => {
const berhasil = true; // ganti false untuk coba reject
setTimeout(() => {
if (berhasil) {
resolve("Janji terpenuhi!"); // Janji berhasil, kirim hasil
} else {
reject("Janji gagal!"); // Janji gagal, kirim alasan error
}
}, 1000);
});

janji.then((hasil) => {
console.log("Success:", hasil); // Dipanggil kalau resolve terpenuhi
}).catch((error) => {
console.log("Error:", error); // Dipanggil kalau reject terjadi
});
```

---

**Catatan:**  
- `resolve(value)` menandakan janji berhasil dengan nilai `value`.  
- `reject(reason)` menandakan janji gagal dengan alasan `reason`.  
- `.then()` menangani hasil sukses.  
- `.catch()` menangani error.

---

## 2. Async/Await + Try/Catch

Async/Await adalah cara modern menulis kode asynchronous agar lebih mudah dibaca seperti kode synchronous. Karena ada potensi error, kita pakai `try/catch` untuk menangkap error tersebut.

```js
function janjiSukses() {
return new Promise(resolve => {
setTimeout(() => {
resolve("Berhasil menunggu 2 detik");
}, 2000);
});
}

async function jalankan() {
try {
console.log("Mulai menunggu...");
const hasil = await janjiSukses(); // Tunggu janji selesai
console.log(hasil); // Tampilkan hasil jika sukses
} catch (error) {
console.error("Terjadi error:", error); // Tangkap dan tampilkan error
} finally {
console.log("Ini selalu dijalankan, berhasil atau error");
}
}

jalankan();
```

---


**Catatan:**  
- Fungsi `async` selalu mengembalikan `Promise`.  
- `await` menunggu `Promise` selesai dan ambil hasil `resolve`-nya.  
- `try` berisi kode yang mungkin error.  
- `catch` dijalankan kalau error muncul.  
- `finally` blok opsional, selalu dijalankan walaupun berhasil atau error (untuk pembersihan, dll).

---

## 3. Contoh Lengkap: Resolve, Reject, Then, Catch, Try/Catch

```js
function cekAngka(angka) {
return new Promise((resolve, reject) => {
setTimeout(() => {
if (typeof angka === "number") {
if (angka > 10) {
resolve("Angka lebih dari 10");
} else {
reject("Angka harus lebih dari 10");
}
} else {
reject("Bukan angka!");
}
}, 1000);
});
}

// Menggunakan .then() dan .catch()
cekAngka(15)
.then((hasil) => {
console.log("Hasil:", hasil); // Output: Hasil: Angka lebih dari 10
})
.catch((error) => {
console.error("Error:", error);
});

// Menggunakan async/await dengan try/catch
async function jalankanCek() {
try {
const hasil = await cekAngka(5);
console.log("Hasil async:", hasil);
} catch (error) {
console.error("Error async:", error); // Output: Error async: Angka harus lebih dari 10
}
}

jalankanCek();
```

text

---

## Ringkasan Peran Kata Kunci

| Kata Kunci       | Fungsi                                                                                  |
|------------------|-----------------------------------------------------------------------------------------|
| `resolve()`      | Menandakan janji berhasil, mengembalikan nilai hasil ke `.then()` atau `await`.         |
| `reject()`       | Menandakan janji gagal, mengembalikan alasan error ke `.catch()` atau blok `catch`.     |
| `.then()`        | Fungsi untuk menerima hasil sukses Promise.                                            |
| `.catch()`       | Fungsi untuk menangani error pada Promise.                                             |
| `async`          | Menandai fungsi yang mengembalikan Promise dan bisa menggunakan `await`.                |
| `await`          | Menunggu Promise selesai, mengambil nilai yang `resolve`.                              |
| `try/catch`      | Menangkap error yang dilempar saat terjadi `reject` atau error di Promise/async code.   |
| `finally`        | Blok opsional yang dijalankan setelah `try`/`catch` walau berhasil atau error.          |

---

## Kesimpulan

Asynchronous programming memungkinkan aplikasi berjalan lebih lancar dan responsif karena tidak menunggu tugas lama selesai sebelum lanjut tugas lain. 

Kombinasi Promise + `.then()`/`.catch()` atau `async/await` + `try/catch` adalah cara umum dan efektif menangani operasi asynchronous sekaligus error handling.

---





