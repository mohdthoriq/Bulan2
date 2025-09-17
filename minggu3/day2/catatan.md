# Callback di JavaScript — Penjelasan Lengkap

Dokumentasi ini menjelaskan **callback** di JavaScript secara mendalam, dengan *examples*, pola error handling, masalah umum (callback hell), serta cara modern menggantinya dengan *Promise* dan *async/await*. Cocok untuk belajar konsep asynchronous, event loop, dan higher-order function.

---

## Daftar Isi

1. Apa itu callback?
2. Callback sinkron (synchronous)
3. Callback asinkron (asynchronous) & event loop
4. Callback anonim dan callback dengan parameter
5. Pola *error-first callback* (Node.js style)
6. Contoh penggunaan nyata: Event listener & setTimeout
7. Callback hell (masalah) dan dampaknya
8. Mengubah callback → Promise → async/await (konversi)
9. Praktik terbaik (best practices)
10. Cheat sheet & contoh cepat
11. FAQ singkat
12. Penutup

---

## 1. Apa itu callback?

Callback adalah **fungsi yang dikirim sebagai argumen** ke fungsi lain dan akan dipanggil kembali (called back) ketika tugas selesai. Dalam istilah functional programming, callback adalah contoh *higher-order function*.

> Analogi: kamu memesan makanan lewat API restoran; nomor telepon yang kamu kasih ke kasir adalah callback — nanti ketika makanan siap, kasir "memanggil balik" kamu.

## 2. Callback sinkron (synchronous)

Callback tidak selalu asinkron — callback juga bisa dipanggil langsung (sinkron) di dalam fungsi.

```js
// Contoh synchronous callback
function repeat(n, action) {
  // action adalah callback yang dipanggil sinkron
  for (let i = 0; i < n; i++) {
    action(i); // panggil callback
  }
}

repeat(3, function(i) {
  // callback anonim menerima parameter i
  console.log('Iterasi ke-', i);
});

// Output:
// Iterasi ke- 0
// Iterasi ke- 1
// Iterasi ke- 2
```

## 3. Callback asinkron & event loop

Di JavaScript, callback sering dipakai untuk operasi asinkron: I/O, HTTP request, timer, dsb. *Event loop* menjaga agar main thread tetap responsif dan memanggil callback ketika operasi selesai.

```js
console.log('Mulai');
setTimeout(function() {
  // callback asinkron dijalankan setelah delay
  console.log('Ini dijalankan setelah 1 detik');
}, 1000);
console.log('Selesai');

// Output:
// Mulai
// Selesai
// Ini dijalankan setelah 1 detik
```

## 4. Callback anonim vs bernama, dan pengiriman argumen

Kamu bisa gunakan callback anonim (fungsi tanpa nama) atau callback bernama.

```js
function proses(nama, cb) {
  // cb adalah callback; bisa kita panggil dengan argumen
  cb('Halo ' + nama);
}

// callback bernama
function tampil(msg) {
  console.log(msg);
}
proses('Sinta', tampil); // mem-passing fungsi bernama sebagai callback

// callback anonim
proses('Bung', function(msg) {
  console.log(msg.toUpperCase());
});
```

## 5. Pola *error-first callback* (Node.js style)

Banyak API Node.js memakai pola `callback(err, result)` — disebut *error-first callback*. Ini membantu menangani error secara eksplisit.

```js
// Contoh pseudo-API I/O (error-first callback)
function bacaFile(path, cb) {
  // cb(err, data)
  // simulasi error/hasil menggunakan setTimeout
  setTimeout(() => {
    if (!path) return cb(new Error('Path tidak diberikan'));
    // jika sukses, cb(null, data)
    cb(null, 'Isi file untuk ' + path);
  }, 200);
}

bacaFile('', function(err, data) {
  if (err) {
    // tangani error terlebih dahulu
    console.error('Error:', err.message);
    return;
  }
  // proses data jika tidak ada error
  console.log('Data:', data);
});
```

## 6. Contoh nyata: Event listener & HTTP request (fetch)

Event listener di DOM dan callback untuk fetch API adalah contoh umum.

```js
// Event listener di browser
// tombol diklik -> callback dijalankan
const btn = document.getElementById('btn');
btn.addEventListener('click', function(event) {
  // event adalah objek Event; fungsi ini adalah callback
  console.log('Tombol diklik!', event.type);
});

// Fetch API modern (fetch mengembalikan Promise, tapi contoh untuk konteks callback lama):
// fetch('https://api.example.com').then(res => res.json()).then(data => console.log(data));
// di sini .then menerima callback untuk resolved Promise
```

## 7. Callback hell (masalah)

Jika kamu menumpuk callback bersarang, kode jadi sulit dibaca dan sulit menangani error—ini disebut *callback hell*.

```js
// Contoh callback hell
login(user, function(err, userData) {
  if (err) return handle(err);
  getProfile(userData.id, function(err, profile) {
    if (err) return handle(err);
    getFriends(profile.id, function(err, friends) {
      if (err) return handle(err);
      // dst... nested callbacks makin dalam -> susah maintain
    });
  });
});
```

Dampak: sulit debug, sulit re-use, dan alur kontrol tersebar.

## 8. Mengubah callback → Promise → async/await (konversi)

Salah satu solusi: bungkus callback dengan `Promise` atau pakai `util.promisify` di Node.js.

```js
// Contoh manual wrapping (callback -> Promise)
function bacaFilePromise(path) {
  return new Promise(function(resolve, reject) {
    bacaFile(path, function(err, data) {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

// Konsumsi: dengan .then/.catch (Promise chaining)
bacaFilePromise('data.txt')
  .then(data => console.log('Data:', data))
  .catch(err => console.error('Error:', err));

// Atau lebih modern: async/await
async function main() {
  try {
    const data = await bacaFilePromise('data.txt');
    console.log('Data via async/await:', data);
  } catch (err) {
    console.error('Error di async:', err);
  }
}
main();
```

## 9. Praktik terbaik (Best Practices)

* **Beri nama callback** jika fungsinya kompleks (readability). // gunakan named function
* **Tangani error lebih awal** (error-first pattern). // cek err dulu
* **Jangan buat nested terlalu dalam** — pecah fungsi menjadi modul kecil. // modularisasi
* **Gunakan Promise / async-await** untuk alur asinkron yang lebih linear. // modern async
* **Dokumentasikan kontrak callback**: argumen apa yang dikirim, apakah sync/async, apakah error-first. // README API
* **Kembalikan nilai atau Promise** untuk memudahkan chaining. // return Promise

## 10. Cheat sheet & contoh cepat

```js
// 1. Synchronous callback
[1,2,3].forEach(function(x) { console.log(x); }); // forEach menerima callback

// 2. Asynchronous callback (timer)
setTimeout(() => console.log('delay'), 500);

// 3. Error-first callback
function contoh(cb) { cb(null, 'ok'); }
contoh(function(err, res) { if (err) return; console.log(res); });

// 4. Wrap callback ke Promise
// lihat bacaFilePromise() di atas
```

## 11. FAQ singkat

**Q: Apakah semua callback asinkron?**
A: Tidak. Callback bisa sinkron (mis. .forEach) atau asinkron (mis. fetch.then, setTimeout). Perbedaan penting adalah apakah fungsi pemanggil memanggil callback langsung atau nanti setelah proses selesai.

**Q: Kenapa callback sering identik dengan masalah readability?**
A: Karena callback bersarang (nested) memecah alur kontrol; solusi: promisify, async/await, modularisasi.

## 12. Penutup

Callback adalah konsep fundamental di JavaScript—fungsi sebagai alat untuk mengontrol alur eksekusi, terutama pada operasi asynchronous. Meski kadang menimbulkan "callback hell", penguasaan pola ini penting untuk memahami Promise, async/await, dan arsitektur event-driven.


---

*Catatan: semua contoh kode disertai komentar `//` untuk membantu memahami tiap baris. Selamat bereksperimen dengan callback, event loop, dan asynchronous programming!*
