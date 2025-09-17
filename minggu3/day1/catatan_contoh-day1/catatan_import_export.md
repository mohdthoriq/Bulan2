## 📘 Catatan Belajar JavaScript: Export & Import
 

---

## ⚠️ Hal yang Perlu Diperhatikan

- **Ekstensi `.js` wajib ditulis saat import**  
  ```js
  import { fungsi } from "./fileku.js";
  ```

## 📌 Modul 1 — Export langsung di definisi (Named exports)

**Kapan pakai:** saat kamu ingin mengekspor fungsi/konstanta satu per satu sewaktu mendeklarasikan.
```js
// halaman1.js
export function a(x, y) {
return x + y;
}

export function b(x, y) {
return x - y;
}
```

*Catatan:*

Penjelasan singkat:  
`export function a(...)` = *named export*.  
File lain bisa mengimpor hanya apa yang dibutuhkan: membantu tree-shaking di bundler.

```js
Import contoh:
mport { a, b } from "./halaman1.js";

console.log(a(5, 3)); // 8
console.log(b(5, 3)); // 2
```

---

## 📌 Modul 2 — Export di akhir file (Batch named exports)

**Kapan pakai:** tulis fungsi dulu, lalu export di akhir file — rapi kalau fungsi panjang.

```js
/ halaman2.js
function c(x, y) {
return x * y;
}

function d(x, y) {
return x / y;
}

// Export di akhir
export { c, d };


Import contoh:
import { c, d } from "./halaman2.js";

console.log(c(5, 3)); // 15
console.log(d(6, 3)); // 2
```
---

## 📌 Modul 3 — Import dan akses (named imports)

```js
// index.js
import { a, b } from "./halaman1.js";
import { c, d } from "./halaman2.js";

console.log(a(5, 3)); // 8
console.log(b(5, 3)); // 2
console.log(c(5, 3)); // 15
console.log(d(6, 3)); // 2
```

*Catatan:* Nama yang diimport harus sama dengan nama yang diexport kecuali kamu pakai alias.

---

## 📌 Modul 4 — Import dengan alias (rename saat import)

```js
import { a as tambah, b as kurang } from "./halaman1.js";
import { c as kali, d as bagi } from "./halaman2.js";

console.log(tambah(10, 2)); // 12
console.log(kurang(10, 2)); // 8
console.log(kali(10, 2)); // 20
console.log(bagi(10, 2)); // 5
```


Menghindari collision nama dan membuat nama lokal lebih deskriptif.

---

## 📌 Modul 5 — Import semua sekaligus (import * as ...)

```js
import * as modul1 from "./halaman1.js";

console.log(modul1.a(2, 3)); // 5
console.log(modul1.b(7, 2)); // 5
```

*Catatan:*

`modul1` adalah objek berisi semua named exports dari `halaman1.js`.

---

## 📌 Modul 6 — Default export (satu per file)


```js
// logger.js
export default function log(message) {
console.log("[LOG]", message);
}

Import:
import log from "./logger.js";
log("Halo"); // [LOG] Halo
```

*Catatan:*

Nama impor bebas dan hanya boleh satu default export per file.

---

## 📌 Modul 7 — Mix named + default export

```js
// util.js
export function a(x) { return x + 1; }
export default function main() { /* ... */ }

Import:
import main, { a } from "./util.js";
```
---



## ✅ Tips Praktis & Best Practices

- Gunakan named exports untuk modul dengan banyak fungsi agar mudah tree-shake.
- Gunakan default export kalau modul punya satu tujuan utama.
- Beri alias import yang jelas.
- Simpan kode terkait dalam satu folder agar modularisasi baik.
- Debug: cek export, import path, dan nama export/import.

---

## 🔁 Contoh lengkap (ringkasan)

```js
// halaman1.js
export function a(x, y) { return x + y; }
export function b(x, y) { return x - y; }


// halaman2.js
function c(x, y) { return x * y; }
function d(x, y) { return x / y; }
export { c, d };


// index.js (consuming)
import { a, b } from "./halaman1.js";
import { c, d } from "./halaman2.js";

console.log(a(5, 3)); // 8
console.log(b(5, 3)); // 2
console.log(c(5, 3)); // 15
console.log(d(6, 3)); // 2
```

---





```js

// alias example
import { a as tambah, b as kurang } from "./halaman1.js";
console.log(tambah(10, 2)); // 12

// import all
import * as modul1 from "./halaman1.js";
console.log(modul1.a(2, 3)); // 5
```

---
- named export
- import bisa di panggil lebih dari 1 file di dalam kurung {}
-  dan bisa di aliaskan dengan menambahkan as nama_baru  // jadi tinggal panggil alias nya untuk manggil function tersebut
- contoh alias atau nama pengganti
```js
 import { tambah as add, kurang as subtract } from "./halaman1.js";
 ```
```js
console.log(add(10, 8));
console.log(subtract(10, 8));
```
- default export
export default 1 halaman hanya bisa 1 kali
- nama di import boleh ngasal nama panggilnya dan tidak perlu di dalam {}
-  meng export juga bis diletak di akhir file tidak messti setiap function kita kasih export, contoh:
-  export {function mana aja yang mau diexport,function lain lagi,??,???}

***
- khusus default 
- export default nama function yang mau dijadiin export default


