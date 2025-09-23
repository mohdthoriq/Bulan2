**Event Handling di JavaScript**

**Event Handling adalah cara JavaScript merespons interaksi pengguna (seperti klik tombol, hover, ketikan keyboard, dsb.) atau perubahan pada elemen HTML.**

Dengan event handling, kita bisa menjalankan fungsi tertentu ketika sebuah event terjadi.

1. Menambahkan Event Handler

Ada beberapa cara untuk menambahkan event handler:

1.1 Inline HTML Attribute

Kita bisa menambahkan event langsung di HTML menggunakan atribut onclick, onmouseover, dsb.

```js
<!-- Inline event handler -->
<button onclick="greet()">Klik aku</button>

<script>
function greet() {
    alert("Halo, selamat datang!");
}
</script>
```

**Penjelasan:**

onclick="greet()" → ketika tombol diklik, fungsi greet() dijalankan.

Cara ini mudah tapi tidak direkomendasikan untuk proyek besar karena susah di-maintain.

1.2 Menggunakan Properti DOM (Element Property)

Kita bisa menambahkan event langsung melalui properti DOM di JavaScript:

```js
<button id="btnGreet">Klik aku</button>

<script>
const button = document.getElementById("btnGreet"); // Ambil elemen button

button.onclick = function() {
    alert("Halo, ini properti DOM onclick!");
}
</script>
```

***Penjelasan:***

button.onclick = function() { ... } → menetapkan fungsi sebagai handler event klik.

Kekurangannya: hanya bisa menetapkan satu fungsi, jika ditimpa, fungsi sebelumnya hilang.

---

1.3 Menggunakan addEventListener() (Direkomendasikan)

addEventListener lebih fleksibel, bisa menambahkan beberapa handler untuk event yang sama.

```js
<button id="btnHello">Klik aku</button>

<script>
const btn = document.getElementById("btnHello");

// Menambahkan event listener untuk 'click'
btn.addEventListener("click", function() {
    alert("Halo, ini menggunakan addEventListener!");
});

// Bisa juga menambahkan event listener lain untuk event yang sama
btn.addEventListener("click", function() {
    console.log("Tombol diklik!");
});
</script>
```

***Penjelasan:***

addEventListener("click", fn) → fn dijalankan saat event click terjadi.

Bisa menambahkan lebih dari satu handler tanpa menimpa yang lain.

Bisa juga menggunakan arrow function:

btn.addEventListener("click", () => console.log("Arrow function dipanggil"));

---

2. Event Object

Saat event terjadi, JavaScript menyediakan event object yang berisi informasi tentang event tersebut, misal elemen target, posisi klik, jenis tombol mouse, dsb.

```js
<button id="btnEvent">Klik aku</button>

<script>
const btn = document.getElementById("btnEvent");

btn.addEventListener("click", function(event) {
    console.log(event);            // Menampilkan seluruh event object
    console.log(event.type);       // Jenis event: "click"
    console.log(event.target);     // Elemen yang memicu event
    console.log(event.clientX);    // Posisi X klik pada viewport
    console.log(event.clientY);    // Posisi Y klik pada viewport
});
</script>
```

***Penjelasan:***

event → parameter yang otomatis dikirim ke handler.

event.type → jenis event (click, mouseover, dll.)

event.target → elemen HTML yang memicu event.

event.clientX/Y → posisi mouse saat klik (relatif terhadap viewport).

3. Contoh Event Lain

--- 

***3.1 Hover (Mouseover / Mouseout)***

```js
<div id="box" style="width:100px;height:100px;background:red"></div>

<script>
const box = document.getElementById("box");

box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "blue"; // Warna biru saat hover
});

box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "red";  // Kembali merah saat mouse keluar
});
</script>

3.2 Input / Keyboard Event
<input id="inputName" type="text" placeholder="Tulis namamu">

<script>
const input = document.getElementById("inputName");

input.addEventListener("input", function(event) {
    console.log("Isi input:", event.target.value);
});
```

   4.***Kesimpulan***

Event handling = mekanisme untuk menangani interaksi pengguna.

Cara menambahkan:

Inline HTML (tidak disarankan)

Properti DOM (element.onclick = ...)

addEventListener() (direkomendasikan)

Event object memberikan info detail tentang event.

Cocok digunakan untuk klik tombol, hover, input, scroll, dsb.