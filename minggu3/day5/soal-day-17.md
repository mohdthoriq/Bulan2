<img src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" style="height:204px;margin-right:32px"/>
<div style="font-family: 'Arial', sans-serif;">

---


# 📝 Tugas DOM Selection & Manipulasi (day 5 week 3 month 2)

## 🎯 Level 1 - Gampang (10 soal)

1. Buat sebuah paragraf dengan id `"p1"`. Gunakan `getElementById` untuk mengubah teks jadi `"Halo DOM!"`.  
   👉 Clue: `document.getElementById("p1").innerText = "...";`

2. Buat 3 paragraf dengan class `"paragraf"`. Gunakan `getElementsByClassName` untuk mengganti warna semua teks jadi biru.  
   👉 Clue: looping pakai `for...of` atau `for`.

3. Buat 5 list `<li>` di dalam `<ul>`. Gunakan `getElementsByTagName` untuk menambahkan tulisan `" - item"` di setiap list.  
   👉 Clue: `li[i].innerText += " - item"`

4. Buat 1 gambar dengan id `"foto"`. Gunakan `querySelector` untuk mengganti `src` gambar.  
   👉 Clue: `document.querySelector("#foto").src = "namagambar.jpg"`

5. Buat 4 paragraf dengan class `"teks"`. Gunakan `querySelectorAll` dan looping untuk mengubah teks menjadi `"Teks ke-1"`, `"Teks ke-2"`, dst.  
   👉 Clue: gunakan parameter `i` dari `forEach`.

6. Buat sebuah paragraf dengan teks `"Awal"`. Ganti teksnya menggunakan `innerText` jadi `"Akhir"`.  
   👉 Clue: `p.innerText = "Akhir"`

7. Buat paragraf `"Belajar DOM"`. Ubah isi HTML jadi `<strong>Belajar DOM</strong>`.  
   👉 Clue: `p.innerHTML = "<strong> ... </strong>"`

8. Buat sebuah div kosong. Tambahkan teks `"Isi baru dari JS"` ke dalam div tersebut.  
   👉 Clue: `div.innerText = "...";`

9. Buat paragraf `"Sembunyikan saya"`. Gunakan `style.display = "none"` untuk menyembunyikannya.  
   👉 Clue: `p.style.display = "none"`

10. Buat paragraf `"Tampilkan saya"`. Gunakan `style.display = "block"` untuk memunculkannya.  
    👉 Clue: `p.style.display = "block"`

---

## 🎯 Level 2 - Medium (5 soal)

11. Buat 3 paragraf dengan class `"warna"`. Ubah warna tiap paragraf berbeda (merah, hijau, biru) dengan looping.  
    👉 Clue: pakai `forEach` dan array warna `["red","green","blue"]`.

12. Buat div dengan id `"box"`. Gunakan JS untuk mengatur:
    - lebar: 200px  
    - tinggi: 200px  
    - background: kuning  
    👉 Clue: `div.style.width = "200px"`

13. Buat sebuah link `<a>` dengan teks `"Klik Aku"`. Ubah `href` menjadi `"https://google.com"` dan tambahkan `target="_blank"`.  
    👉 Clue: pakai `setAttribute`.

14. Buat 3 paragraf `"Paragraf A"`, `"Paragraf B"`, `"Paragraf C"`. Ubah masing-masing jadi **huruf kapital** semua menggunakan JS.  
    👉 Clue: `p.innerText = p.innerText.toUpperCase()`

15. Buat paragraf `"Judul Lama"`. Tambahkan class `"highlight"` menggunakan `classList.add`.  
    👉 Clue: `p.classList.add("highlight")`

---

## 🎯 Level 3 - Sulit (3 soal)

16. Buat 5 list `<li>` dengan class `"item"`. Gunakan `querySelectorAll` untuk memberi warna selang-seling (misalnya genap → merah, ganjil → biru).  
    👉 Clue: gunakan `if (i % 2 === 0)` di dalam looping.

17. Buat 3 gambar dengan class `"img"`. Ganti semua `src` gambarnya jadi `"placeholder.jpg"` menggunakan looping.  
    👉 Clue: looping dengan `forEach`.

18. Buat paragraf `"Hello"`. Tambahkan style agar:
    - warna: putih  
    - background: hitam  
    - ukuran font: 30px  
    👉 Clue: `p.style.color = "white"`

---

## 🎯 Level 4 - Extra Sulit (2 soal, Fetch API)

19. Gunakan `fetch("https://equran.id/api/v2/surat/1")` untuk mengambil data. Tampilkan **nama surat** ke dalam sebuah paragraf di HTML.  
    👉 Clue: `data.data.namaLatin`

20. Gunakan `fetch("https://equran.id/api/v2/surat")` untuk mengambil daftar surat. Tampilkan minimal **5 nama surat pertama** dalam list `<ul>` di HTML menggunakan looping.  
    👉 Clue: `data.data.forEach(...)`
