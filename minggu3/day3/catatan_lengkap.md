# Belajar Promise dan Promise Chaining di JavaScript

## 1. Apa itu Promise?

Promise adalah sebuah objek di JavaScript yang digunakan untuk menangani operasi asynchronous.  
Operasi asynchronous adalah proses yang hasilnya tidak langsung keluar, misalnya ambil data dari server, baca file, atau timer.

Status utama Promise ada 3:  
- **Pending** → masih menunggu hasil.  
- **Fulfilled** → berhasil, ada hasil (value).  
- **Rejected** → gagal, ada error.

---

## 2. Struktur Dasar Promise

```js
// Membuat Promise
let janji = new Promise(function(resolve, reject) {
let sukses = true; // coba ubah ke false untuk simulasi gagal

if (sukses) {
resolve("Data berhasil diambil!"); // kalau sukses
} else {
reject("Terjadi error saat mengambil data."); // kalau gagal
}
});

// Menggunakan Promise
janji
.then(function(result) {
console.log(result);
// akan tampil "Data berhasil diambil!" kalau resolve dipanggil
})
.catch(function(error) {
console.log(error);
// akan tampil "Terjadi error saat mengambil data." kalau reject dipanggil
})
.finally(() => console.log("Selesai menjalankan promise"));
// finally akan selalu jalan apapun hasilnya
```

---

## 3. Promise Chaining

Promise Chaining adalah menghubungkan beberapa `.then()` agar hasil dari satu langkah bisa dipakai di langkah berikutnya.

```js
function ambilDataUser() {
return new Promise((resolve) => {
setTimeout(() => {
resolve({ id: 1, nama: "Aisyah" });
// setelah 1 detik, kembalikan objek user
}, 1000);
});
}

function ambilDataTransaksi(user) {
return new Promise((resolve) => {
setTimeout(() => {
resolve({ userId: user.id, total: 50000 });
// setelah 1 detik, kembalikan transaksi berdasarkan user.id
}, 1000);
});
}

// Chaining
ambilDataUser()
.then((user) => {
console.log("User:", user);
// hasil: { id: 1, nama: "Aisyah" }
return ambilDataTransaksi(user);
// lempar user ke function berikutnya
})
.then((transaksi) => {
console.log("Transaksi:", transaksi);
// hasil: { userId: 1, total: 50000 }
})
.catch((err) => console.log("Error:", err))
.finally(() => console.log("Selesai"));
```

---

## 4. Chaining dengan Nilai Biasa

Jika `.then()` mengembalikan nilai biasa (bukan Promise), nilai tersebut diteruskan ke `.then()` berikutnya.

```js
Promise.resolve(10) // Promise langsung dengan nilai 10
.then((angka) => angka * 2)
// return 20 (nilai biasa, bukan Promise)
.then((hasil) => hasil + 5)
// return 25
.then((final) => console.log(final));
// Output: 25
```

---

## 5. Jenis Promise Utility

### 5.1 Promise.all()

Menunggu semua Promise selesai. Jika ada satu yang gagal, langsung ke `.catch()`.

```js
let p1 = Promise.resolve(10);
let p2 = Promise.resolve(20);
let p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
.then((hasil) => console.log("Hasil:", hasil))
// Output:
.catch((err) => console.log("Error:", err));
```

---

### 5.2 Promise.allSettled()

Menunggu semua Promise selesai, apapun hasilnya (berhasil atau gagal).
```js
let p1 = Promise.resolve("Sukses");
let p2 = Promise.reject("Gagal");

Promise.allSettled([p1, p2])
.then((hasil) => console.log(hasil));
// Output:
// [
// { status: "fulfilled", value: "Sukses" },
// { status: "rejected", reason: "Gagal" }
// ]
```

### 5.3 Promise.race()

Mengambil Promise yang paling cepat selesai (berhasil atau gagal).

```js
let p1 = new Promise((resolve) => setTimeout(() => resolve("Cepat"), 1000));
let p2 = new Promise((resolve) => setTimeout(() => resolve("Lambat"), 3000));

Promise.race([p1, p2])
.then((hasil) => console.log("Pemenang:", hasil));
// Output: "Cepat"
```

---

### 5.4 Promise.any()

Mirip `race`, tapi hanya mengembalikan Promise pertama yang **berhasil** (fulfilled).  
Kalau semua gagal, keluar error `AggregateError`.

```js
let p1 = Promise.reject("Error 1");
let p2 = Promise.resolve("Berhasil");
let p3 = Promise.reject("Error 2");

Promise.any([p1, p2, p3])
.then((hasil) => console.log("Hasil:", hasil))
// Output: "Berhasil"
.catch((err) => console.log(err));
```

---

## 6. Manfaat Promise

- Menghindari callback hell (callback bertingkat yang sulit dibaca).  
- Kode lebih rapi dan mudah dibaca.  
- Bisa dipakai bersama `async/await` untuk syntax asynchronous yang lebih modern.  
- Mendukung operasi paralel dengan utility seperti `.all()`, `.allSettled()`, `.race()`, dan `.any()`.

---

## 7. Kesimpulan

- Promise adalah cara modern mengelola asynchronous di JavaScript dengan status `pending → fulfilled/rejected`.  
- Method utama:  
  - `.then()` → mengeksekusi saat Promise berhasil.  
  - `.catch()` → mengeksekusi saat Promise gagal (error).  
  - `.finally()` → selalu dijalankan baik berhasil maupun gagal.  
- Promise Chaining membantu membuat alur asynchronous jadi lebih terstruktur.  
- Utility seperti `.all()`, `.allSettled()`, `.race()`, dan `.any()` memudahkan pekerjaan dengan banyak Promise sekaligus.  
- Dengan Promise, menangani alur asynchronous jadi bersih, efisien, dan mudah dirawat.

---



