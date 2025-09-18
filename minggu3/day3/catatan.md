# Promise dan Promise Chaining di JavaScript

## 1. Apa itu Promise?

`Promise` adalah sebuah **objek** di JavaScript yang digunakan untuk menangani operasi **asynchronous**. Operasi asynchronous adalah proses yang hasilnya tidak langsung tersedia, misalnya: mengambil data dari server, membaca file, atau menunggu timer.

Promise berfungsi seperti **janji**: hasilnya bisa berhasil (fulfilled) atau gagal (rejected). Selama belum selesai, statusnya adalah pending.

### 3 State (Keadaan) dalam Promise:

1. **Pending** → Promise sedang menunggu hasil.
2. **Fulfilled** → Promise berhasil diselesaikan, menghasilkan nilai (value).
3. **Rejected** → Promise gagal diselesaikan, menghasilkan error.

---

## 2. Struktur Dasar Promise

```js
// Membuat Promise
let janji = new Promise(function(resolve, reject) {
  let sukses = true; // coba ubah ke false untuk menguji error

  if (sukses) {
    resolve("Data berhasil diambil!"); // jika berhasil
  } else {
    reject("Terjadi error saat mengambil data."); // jika gagal
  }
});

// Menggunakan Promise
janji
  .then(function(result) {
    console.log(result); // dijalankan kalau resolve dipanggil
  })
  .catch(function(error) {
    console.log(error); // dijalankan kalau reject dipanggil
  });
```

### Penjelasan Kode

* `resolve()` → fungsi untuk memberi tahu kalau proses berhasil.
* `reject()` → fungsi untuk memberi tahu kalau proses gagal.
* `.then()` → menangani hasil sukses.
* `.catch()` → menangani error.

---

## 3. Promise Chaining

**Chaining** artinya menyambungkan beberapa `.then()` sehingga hasil dari satu proses bisa diteruskan ke proses berikutnya.

Ini membuat alur asynchronous lebih rapi dibanding callback hell.

### Contoh Kasus: Ambil data user, lalu ambil data transaksi user tersebut

```js
function ambilDataUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, nama: "Aisyah" });
    }, 1000);
  });
}

function ambilDataTransaksi(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userId: user.id, total: 50000 });
    }, 1000);
  });
}

// Promise Chaining
ambilDataUser()
  .then((user) => {
    console.log("User:", user);
    return ambilDataTransaksi(user); // return Promise baru
  })
  .then((transaksi) => {
    console.log("Transaksi:", transaksi);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
```

### Output:

```
User: { id: 1, nama: 'Aisyah' }
Transaksi: { userId: 1, total: 50000 }
```

---

## 4. Pentingnya Promise Chaining

Tanpa chaining, kode asynchronous bisa menumpuk ke dalam (**callback hell**), seperti ini:

```js
ambilDataUser(function(user) {
  ambilDataTransaksi(user, function(transaksi) {
    ambilDataLainnya(transaksi, function(lainnya) {
      console.log(lainnya);
    });
  });
});
```

Dengan Promise chaining, kode lebih bersih dan mudah dibaca:

```js
ambilDataUser()
  .then(ambilDataTransaksi)
  .then(ambilDataLainnya)
  .then(console.log)
  .catch(console.error);
```

---

## 5. Chaining dengan Nilai Biasa

Kalau `then()` tidak mengembalikan Promise, nilai biasa akan langsung diteruskan ke `then()` berikutnya.

```js
Promise.resolve(10)
  .then((angka) => angka * 2) // return nilai biasa
  .then((hasil) => hasil + 5)
  .then((final) => console.log(final)); // output: 25
```

---

## 6. Kesimpulan

* **Promise**: objek untuk mengelola proses asynchronous.
* **State**: pending, fulfilled, rejected.
* **Method penting**:

  * `.then()` → untuk hasil sukses.
  * `.catch()` → untuk menangani error.
  * `.finally()` → dijalankan di akhir, apapun hasilnya.
* **Chaining** membuat alur asynchronous rapi, menggantikan callback hell.

---

⚡ Dengan Promise dan chaining, pengelolaan async di JavaScript jadi lebih mudah, jelas, dan nyaman dibaca.
