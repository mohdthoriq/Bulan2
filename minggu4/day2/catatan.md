## Form Validation

Form validation adalah proses memverifikasi input dari pengguna untuk memastikan data yang dikirimkan ke aplikasi sesuai dengan aturan yang telah ditetapkan. Tujuannya adalah untuk mencegah data yang salah atau berbahaya masuk ke sistem, meningkatkan **User Experience (UX)** dengan memberikan umpan balik yang jelas, dan menjaga keamanan aplikasi dari serangan seperti *injection*.

-----

### 🚦 Tipe Validasi

Validasi dapat dikategorikan menjadi beberapa jenis:

  * **Client-side vs Server-side**
      * **Client-side**: Dilakukan di browser. Cepat dan memberikan umpan balik instan, bagus untuk UX. Namun, tidak boleh menjadi satu-satunya pertahanan karena dapat dimanipulasi.
      * **Server-side**: Dilakukan di server. Ini adalah validasi **wajib** dan merupakan lini pertahanan utama untuk keamanan.
  * **Field-level vs Form-level**
      * **Field-level**: Memeriksa setiap input secara individu (misalnya, format email yang benar).
      * **Form-level**: Memeriksa hubungan antar-field (misalnya, memastikan password dan konfirmasi password sama).
  * **Synchronous vs Asynchronous**
      * **Synchronous**: Validasi yang terjadi secara instan (misalnya, memeriksa panjang teks).
      * **Asynchronous**: Memerlukan panggilan ke server untuk validasi (misalnya, memeriksa apakah username sudah digunakan).

-----

### 🛠️ Aturan Validasi Umum

Berikut adalah beberapa aturan validasi yang sering digunakan:

  * `required`: Memastikan input tidak kosong.
  * `type=email` / `type=number`: Memanfaatkan tipe input HTML5 untuk validasi dasar.
  * `pattern` / **RegEx**: Menggunakan ekspresi reguler untuk mencocokkan format string (misalnya, `^[a-zA-Z0-9_]{3,20}$` untuk username).
  * `minlength` / `maxlength`: Menetapkan panjang minimal dan maksimal untuk teks.
  * `min` / `max`: Menetapkan nilai minimal dan maksimal untuk angka atau tanggal.
  * **Custom Rules**: Aturan khusus yang dibuat dengan JavaScript, seperti validasi kompleks untuk kekuatan password (`/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/`).

-----

### 🚀 Implementasi

#### 1\. HTML5 Built-in Validation

Cara paling sederhana menggunakan atribut HTML5.

```html
<form id="signup">
  <input name="email" type="email" required />
  <input name="password" type="password" minlength="8" required />
  <input name="age" type="number" min="13" />
  <button type="submit">Daftar</button>
</form>
```

Browser akan secara otomatis menampilkan pesan kesalahan jika validasi gagal. Namun, pesan ini seringkali generik dan perlu dikustomisasi.

#### 2\. Kustomisasi dengan JavaScript

Untuk kontrol lebih lanjut, kita dapat menggunakan JavaScript untuk menangani validasi secara manual.

**Contoh Sederhana**

```js
const form = document.getElementById('signupForm');

// Mencegah submit default
form.addEventListener('submit', function(e) {
  e.preventDefault(); 
  
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // Contoh validasi sederhana
  if (!emailInput.value.includes('@')) {
    alert('Email tidak valid!');
    return;
  }
  
  if (passwordInput.value.length < 8) {
    alert('Password minimal 8 karakter!');
    return;
  }
  
  // Jika valid, kirim data
  console.log('Form valid dan siap dikirim!');
  // fetch('/api/signup', { method: 'POST', body: ... });
});
```

#### 3\. Validasi Asynchronous

Digunakan untuk memeriksa data dengan memanggil API ke server, seperti memeriksa ketersediaan username.

```js
// Pseudo-code untuk debounce
let timer;
inputUsername.oninput = () => {
  clearTimeout(timer);
  timer = setTimeout(async () => {
    const res = await fetch(`/api/check-username?u=${inputUsername.value}`);
    const { available } = await res.json();
    if (!available) {
      showError(inputUsername, 'Username sudah digunakan');
    } else {
      clearError(inputUsername);
    }
  }, 500); // Tunggu 500ms
};
```

-----

### 🔒 Keamanan & Best Practices

  * **Selalu Validasi di Server**: Jangan pernah percaya input dari client. Validasi server adalah pertahanan utama. Gunakan library seperti **Joi**, **Zod**, atau **express-validator** di Node.js.
  * **Sanitize Input**: Bersihkan data dari karakter berbahaya (`<script>`, SQL commands, dll.) sebelum memprosesnya.
  * **Gunakan Hashing**: Hash password dengan algoritma kuat seperti **bcrypt** atau **scrypt** sebelum menyimpannya di database.
  * **Berikan Umpan Balik yang Jelas**: Tampilkan pesan kesalahan yang deskriptif dan letakkan di dekat field yang bermasalah.
  * **Prioritaskan Aksesibilitas**: Gunakan atribut **ARIA** seperti `aria-invalid="true"` untuk membantu pengguna yang menggunakan teknologi asistif.
  * **Uji Coba Kode**: Buat fungsi validasi terpisah (pure functions) agar mudah diuji (`unit test`).