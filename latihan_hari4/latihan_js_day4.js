// rekap absensi santri
function hitungAbsensi(absensiArr) {
  // Step 1: Validasi minimal 1 data dengan do..while
  let isValid = false;
  do { 
    if (absensiArr.length > 0) { // hanya mengecek 1 data
      isValid = true;
    } else {
      console.log("Data absensi minimal 1 elemen!");
      return "Input tidak valid!";
    }
  } while (!isValid); 

  // Step 2: Siapkan counter
  let hadir = 0; // mendeklarasikan counter
  let alpa = 0;
  let izin = 0;

  // Step 3: Loop dengan for untuk hitung jumlah
  for (let i = 0; i < absensiArr.length; i++) { // cek setiap elemen
    if (absensiArr[i] === "Hadir") {
      hadir++;
    } else if (absensiArr[i] === "Alpa") {
      alpa++;
    } else if (absensiArr[i] === "Izin") {
      izin++;
    }
  }

  // Step 4: Hitung persentase hadir
  let total = absensiArr.length;
  let persenHadir = (hadir / total) * 100;

  // Step 5: Buat rekap dengan switch
  let rekap = [];
  ["Hadir", "Alpa", "Izin"].forEach((status) => { // foreach untuk gabung output dengan string
    switch (status) {
      case "Hadir":
        rekap.push(`Hadir: ${hadir} kali`);
        break;
      case "Alpa":
        rekap.push(`Alpa: ${alpa} kali`);
        break;
      case "Izin":
        rekap.push(`Izin: ${izin} kali`);
        break;
    }
  });

  // Step 6: Tambah persentase hadir
  rekap.push(`Hadir: ${persenHadir}%`);

  // Step 7: Return string gabungan
  return rekap.join(", ");
}

// 🔹 Uji coba
let data = ["Hadir","Alpa","Izin","Hadir","Hadir"];
console.log(hitungAbsensi(data));
// Output: "Hadir: 3 kali, Alpa: 1 kali, Izin: 1 kali, Hadir: 60%"

let namaArr = []; // deklarasi array
let nilaiArr = [];

// laporan santri lulus IT fundamental
function laporanKelulusan(namaArr, nilaiArr) { // mendefinisikan fungsi dengan 2 parameter
    let isValid = false; // var fleg untuk mengecek input valid atau tidak
    do { // utk melihat kondisi valid jika tidak return jika valid langsung pindah ke loop
      if (namaArr.length > 0 && nilaiArr.length > 0 && namaArr.length  === nilaiArr.length) {
        isValid = true;
      } else {
        return "input tidak valid";
      }
    } while (!isValid);
  
    let laporan = []; // deklarasi array kosong
    for (let i = 0; i < namaArr.length; i++) { // looping jumlah santri sebnayak jumlah santri
        let nama = namaArr[i];
        let nilai = nilaiArr[i];
        let status = "";

      if (nilaiArr[i] >= 70) { // cek syarat kelulusan hasil dimasukkan ke array
        laporan.push(`${namaArr[i]}: LULUS (nilai ${nilaiArr[i]})`);
      } else {
        laporan.push(`${namaArr[i]}: TIDAK LULUS (nilai ${nilaiArr[i]})`);
      }
      switch (nilaiArr[i]) { // untuk mengategorikan nilai tertentu
        case 100:
          status = "Sangat Baik";
          break;
        case 90:
          status = "Baik";
          break;
        case 70:
          status = "Cukup";
          break;
        case 50:
          status = "Kurang";
          break;
        default: 
         console.log("tidak memasukkan nilai");
    }
    let Output = `${nama}: ${status} (nilai${nilaiArr[i]})`; // menampilkan nilai tambahan dari switch

    laporan.push(Output); // menambahkan string output kedalam laporan
    console.log(Output);
  } // mengecek setiap elemen laporan ke console 1-1 dengan foreach
  laporan.forEach((item) => console.log(item));//khusus array, lebih pendek, enak buat baca semua isi array.
  return laporan.join("<br>"); // gabungkan semua elemen laporan jadi string panjang yang dipisahkan dg br setiap baris

}
  
laporanKelulusan(["Ali","Budi","Cici"],["78","55","95"]);
// laporanKelulusan("78","55","95");



// 3.analisa hafalan quran mingguan

let hafalanArr = []; // deklarasi array kosong

function analisaHafalan(hafalanArr) {
    let i = 0; // inisial awal
    while (hafalanArr.length === 0) { // jika array kosong masuk ke kondisi ini
        console.log("data tidak boleh kosong");
        return "input tidak valid";
    }
let laporan = []; // menyimpan teks laporan
let totalHafalan = 0; // penjumlahan semua ayat 

// loop untuk rekap
for (let minggu = 0; minggu < hafalanArr.length; minggu++) { // looping dari minggu 0 sampe akhir
    let ayat = hafalanArr[minggu]; // jumlah ayat minggu ini
    totalHafalan += hafalanArr[minggu];
    let status = ""; // ;utk switch

    // switch status
    switch (true) { // trik supaya bisa pakai kondisi logika
        case ayat < 10:
            status = "Kurang";
            break;
        case ayat >= 10 && ayat < 15:
            status = "Cukup";
            break;
        case ayat >= 15 && ayat < 20:
            status = "Baik";
            break;
       default :
            status = "Sangat Baik";
            break;        
}
// laporan mingguan
let teks = `Minggu ke-${minggu + 1}: ${hafalanArr[minggu]} ayat, status ${status}`;
laporan.push(teks); // hasil string dimasukkan ke array laporan

}
//hitung rata-rata
let rataRata = totalHafalan / hafalanArr.length; // rata-rata: total ayat dibagi jumlah minggu
laporan.push(`Rata-rata: ${rataRata.toFixed(2)} ayat.`); // .toFixed membatasi angka desimal jadi 2 digit, dipush ke array laporan

// laporan dengan string
laporan.forEach((item) => console.log(item)); // cetakk setiap laporan ke console
return laporan.join("<br>" )

}
console.log(analisaHafalan([8]));
console.log(analisaHafalan([10]));




// 4.rekap usia dan generasi santri
function rekapUsia(usiaArr) {
  // Step 1: Validasi dengan do while
  let isValid = false; // menganggap awal data tidak valid
  do {
    let adaNegatif = usiaArr.some((u) => u < 0); // cek ada usia negatif?
    if (adaNegatif || usiaArr.length === 0) { // kalau ada negatif atau array kosong data dianggap invalid
      console.log("Data usia tidak valid!");
      return "Input tidak valid";
    } else {
      isValid = true; // kalo aman keluaar dari loop
    }
  } while (!isValid);

  let laporan = [];

  // Step 2: Loop for
  for (let i = 0; i < usiaArr.length; i++) { 
    let usia = usiaArr[i]; // ambil umur santri
    let kategori = "";

    // Step 3: Switch kategori
    switch (true) { 
      case usia < 13:
        kategori = "Anak-anak";
        break;
      case usia >= 13 && usia <= 19:
        kategori = "Remaja";
        break;
      default:
        kategori = "Dewasa";
    }

    // Format teks
    let teks = `Santri ${i + 1}: ${kategori} (${usia} th)`; // penomoran dimulai dari 1 bukan,0
    laporan.push(teks); // masukkan ke array laporan
  }

  // Step 4: Print dengan forEach
  laporan.forEach((line) => console.log(line)); // jalankan semua item di laporan dan dikeluarkan do console

  // Step 5: Return sebagai string
  return laporan.join("\n"); // gabungka  array jadi 1 string 
}

// 🔹 Uji coba
let angka = [11, 16, 22];
console.log(rekapUsia(angka));


// 5. daftar santri dan salam digital
function daftarSalam(namaArr) {
  // Step 1: Validasi duplikat pakai while
  let i = 0;
  // new Set(namaArr) → bikin Set, struktur data unik tanpa duplikat.
  while (new Set(namaArr).size !== namaArr.length) {
    console.log("Data nama tidak boleh duplikat!");
    return "Input tidak valid";
  }

  let salamList = [];

  // Step 2: Loop for
  for (let i = 0; i < namaArr.length; i++) {
    let nama = namaArr[i];
    let salam = `Assalamualaikum ${nama}`;

    // Step 3: if untuk nama pendek
    if (nama.length <= 3) { // klo namany hanya 3 huruf
      salam = `Salam hangat untuk ${nama}`;
    }

    // Step 4: switch variasi kalau nama mulai 'A'
    switch (nama[0].toUpperCase()) { // toUpperCase supaya a dan A dianggapsama
      case "A":
        salam = `Ahlan wa sahlan, ${nama}`;
        break;
      default:
        // biarin salam sesuai hasil sebelumnya
    }

    salamList.push(salam); // masukkan ke array salam list
  }

  // Step 5: Print dengan forEach
  salamList.forEach((s) => console.log(s));

  // Step 6: Return string
  return salamList.join("\n");
}

// 🔹 Uji coba
let list = ["Imam", "Ali", "El"];
console.log(daftarSalam(list));


// 6. filter nilai santri digital
function filterNilai(namaArr, nilaiArr, batas) {
  // Step 1: Validasi dengan while
  let isValid = false;
  while (!isValid) {
    if (
      namaArr.length > 0 &&
      nilaiArr.length > 0 &&
      namaArr.length === nilaiArr.length
    ) {
      isValid = true;
    } else {
      console.log("Data tidak valid!");
      return "Input tidak valid";
    }
  }

  let lolos = [];

  // Step 2: Loop paralel for
  for (let i = 0; i < namaArr.length; i++) {
    let nama = namaArr[i]; // ambil nama seseuai index
    let nilai = nilaiArr[i]; // ambil nilai yang sejajar dengan nama

    // Step 3: if cek batas
    if (nilai >= batas) {
      lolos.push(nama); // klo lulus masuk kan ke array
    }
  }

  // Step 4: Switch buat format pesan (opsional)
  let pesan = "";
  switch (lolos.length) { // cek berapa orang yang lolos
    case 0:
      pesan = "Tidak ada yang mencapai nilai batas.";
      break;
    case 1:
      pesan = `${lolos[0]} mendapatkan nilai di atas ${batas}.`; // klo cuma 1 nama saja
      break;
    default:
      pesan = `${lolos.join(" & ")} mendapatkan nilai di atas ${batas}.`; // jika lebih dari 1 gzbungkan dengan &
  }

  // Step 5: Print dengan forEach
  lolos.forEach((nama) => console.log(nama));// cetak nama yang lulus ke console

  // Step 6: Return string laporan
  return pesan;
}

// 🔹 Uji coba
let nama = ["Wahyu", "Dina", "Umar"];
let nilai = [92, 65, 88];
console.log(filterNilai(nama, nilai, 80));


// 7. rekap kegiatan pembinaan it
function rekapKegiatan(kegiatanArr) {
  // Step 1: Validasi minimal 1 kegiatan
  do {
    if (kegiatanArr.length === 0) {
      console.log("Data tidak boleh kosong!");
      return "Input tidak valid";
    }
  } while (kegiatanArr.length === 0); // function tidak bisa jalan klo data kosong

  // Step 2: Counter rekap
  let hasil = {};
  
  // Step 3: Loop dengan for + switch
  for (let i = 0; i < kegiatanArr.length; i++) {
    let kegiatan = kegiatanArr[i];
    switch (kegiatan) {
      case "Coding":
        hasil["Coding"] = (hasil["Coding"] || 0) + 1;
        break;
      case "Ngaji":
        hasil["Ngaji"] = (hasil["Ngaji"] || 0) + 1;
        break;
      case "Sholat":
        hasil["Sholat"] = (hasil["Sholat"] || 0) + 1;
        break;
      default:
        hasil[kegiatan] = (hasil[kegiatan] || 0) + 1;
    }
  }

  // Step 4: Print hasil dengan forEach
  let deskripsi = [];
  // mengambil semua key di object hhasil
  Object.keys(hasil).forEach((kegiatan) => {
    console.log(`${kegiatan} ${hasil[kegiatan]}`);
    deskripsi.push(`${kegiatan} ${hasil[kegiatan]}`); // masukkan ke array deskripsi
  });

  // Step 5: Return string deskriptif
  return deskripsi.join(", "); // gabungkan array dengan ,
}

// 🔹 Uji coba
let tugas = ["Coding","Ngaji","Coding","Sholat","Ngaji"];
console.log(rekapKegiatan(tugas));


// 8. list santri mukim dan online
function listSantri(statusArr, namaArr) {
  // Step 1: Validasi minimal ada 1 Mukim
  let adaMukim = false; // asumsi awal belum ada santrimukim
  let i = 0;
  while (i < statusArr.length) {
    if (statusArr[i] === "Mukim") {
      adaMukim = true;
      break;
    }
    i++;
  }
  if (!adaMukim) return "Harus ada minimal 1 santri Mukim!";

  // Step 2: Siapkan kelompok
  let kelompok = { // mengelompokkan berdasarkan status
    Mukim: [],
    Online: []
  };

  // Step 3: Loop paralel
  for (let j = 0; j < statusArr.length; j++) { //looping seanyak jumlah satri
    let status = statusArr[j];
    let nama = namaArr[j];

    switch (status) {
      case "Mukim":
        kelompok.Mukim.push(nama);
        break;
      case "Online":
        kelompok.Online.push(nama);
        break;
      default:
        console.log(`Status ${status} tidak dikenal`);
    }
  }

  // Step 4: Print dengan forEach
  let hasil = [];
  // mengambil semua key di object kelompok
  Object.keys(kelompok).forEach((kategori) => {
    if (kelompok[kategori].length > 0) {
      hasil.push(`Santri ${kategori}: ${kelompok[kategori].join(", ")}`); // simpan hasil ke array
    }
  });

  // Step 5: Return string gabungan
  return hasil.join(" | "); // gabungkan semua hasil dengan pemisah |
}

// 🔹 Uji coba
let status = ["Mukim","Online","Mukim"];
let namasantri = ["Rini","Ari","Yusuf"];

console.log(listSantri(status, namasantri));


// 9. nilai tertinggi ujian tahfidz dan IT
function nilaiTertinggi(namaArr, nilaiArr) {
  // Step 1: Validasi panjang array
  let i = 0;
  while (i < namaArr.length) {
    if (namaArr.length !== nilaiArr.length) {
      return "Error: panjang array tidak sama!";
    }
    i++;
  }

  // Step 2: Cari nilai max
  let maxNilai = nilaiArr[0]; // nilai pertama 
  let maxNama = namaArr[0]; // nama pertama

  for (let j = 1; j < nilaiArr.length; j++) { // mulai loop index dimulai dari 1
    if (nilaiArr[j] > maxNilai) {
      maxNilai = nilaiArr[j]; // jika ada nilai yang lebih besar maka input ke paling besar
      maxNama = namaArr[j];  
    }
  }

  // Step 3: Tambah simbol * kalau nilainya 100
  let simbol = "";
  switch (maxNilai) {
    case 100: // jika nilai 100 maka tambah kan selepas angka itu *
      simbol = " *";
      break;
    default:
      simbol = "";
  }

  // Step 4: Print semua data dengan forEach (rekap)
  namaArr.forEach((nama, idx) => { // ngeprint data nama dan nilai sesuai index di console.log
    console.log(`${nama}: ${nilaiArr[idx]}`); // nilai sesuai urutan index
  });

  // Step 5: Return hasil
  return `Nilai tertinggi ${maxNama}: ${maxNilai}${simbol}`;
}

// 🔹 Uji coba
let namatahfidz = ["Ana","Udin","Kiki","Ahmad"];
let nilaiTahfidz = [77,95,95,100];
// nilai tertinggi ahmad : 100 *
console.log(nilaiTertinggi(namatahfidz, nilaiTahfidz));


// 10. filter nis santri  
function filterNIS(nisArr) {
  // Step 1: Validasi do while
  let i = 0; // membuat counter
  do {
    if (nisArr.length === 0) {
      return "Error: Data NIS tidak boleh kosong!";
    }
    i++;
  } while (i < 1); // dijalankan minimal sekali

  // Step 2: Siapkan array penampung
  let validArr = []; // array untuk NIS yang valid
  let invalidArr = []; // array untuk NIS yang invalid


  // Step 3: Loop for cek tiap NIS
  for (let j = 0; j < nisArr.length; j++) {
    let nis = nisArr[j];
    let status = "";

    if (/^\d{6}$/.test(nis)) { // regex : ^ = mulai dari awal string, \d{6} = harus ada 6 digit angka di dalam nis, $ = sampai akhir string
      status = "valid";
    } else {
      status = "invalid";
    }

    // Step 4: Klasifikasi dengan switch
    switch (status) { // pake switch utk memasukkan ke array yang sesuai
      case "valid":
        validArr.push(nis); // mamsukkan ke array nis
        break;
      case "invalid":
        invalidArr.push(nis);
        break;
    }
  }

  // Step 5: Print dengan forEach
  console.log("Rekap NIS:");
  validArr.forEach(v => console.log(`Valid: ${v}`)); // print angka yang valid di console
  invalidArr.forEach(iv => console.log(`Invalid: ${iv}`)); // print angka yang invalid di console

  // Step 6: Return string hasil
  return `NIS valid: ${validArr.join(", ")}; NIS invalid: ${invalidArr.join(", ")}`;
  // menggunakan .join utk menggabungkan array menjadi satu string
}

// 🔹 Uji coba
let datanis = ["123456","765432","1234"];
console.log(filterNIS(datanis));


// 11. akumulasi partisipasi kegiatan mingguan
function totalKegiatan(partArr) {
  // Step 1: Validasi dengan do while
  let i = 0;
  do {
    if (partArr.length === 0) { // klo kosong maka error
      return "Error: Data tidak boleh kosong!";
    }
    i++;
  } while (i < 1); // dijalankan 1x

  // Step 2: Siapkan variabel
  let total = 0; // waadah untuk semua
  let max = partArr[0]; // nilai min dan max diinisialisasikan dari array
  let min = partArr[0];

  // Step 3: Loop for
  for (let j = 0; j < partArr.length; j++) {
    let val = partArr[j]; // val mengambil nilai kegiatan di index
    total += val; // inisialisasikan ulang total

    if (val > max) {
      max = val;
    }
    if (val < min) {
      min = val;
    }
  }

  // Step 4: Hitung rata-rata
  let rata = total / partArr.length; // rata2 : total dibagi jumlah hari

  // Step 5: Debug cetak tiap data
  console.log("Rekap harian:");
  partArr.forEach((val, idx) => { // print di console pake idx + 1 supaya hitung hari dimulai dari 1 bukan 0
    console.log(`Hari ke-${idx + 1}: ${val} kali`);// dihari 1 bearapa kali kegiatan
  });

  // Step 6: Switch tambahan (contoh kondisi khusus)
  switch (true) { // kenapa true? karena kita bisa men set nilai yang di switch ke true
    case max === 0: // jadi disini kita bisa buat perbandingan
      console.log("Tidak ada partisipasi maksimal.");
      break;
    default:
      // no special handling
      break;
  }

  // Step 7: Return string hasil
  return `Total partisipasi: ${total} kali, rata-rata ${rata.toFixed(1)}/hari, max ${max}, min ${min}`;
  // total semua kegiatan, rata.toFixed(1) rata2 dibulatkan angka yang dibelakang koma, max nilai tertinggi
}

// 🔹 Uji coba
let datakegiatan = [2, 3, 4, 1];
console.log(totalKegiatan(datakegiatan));


// 12. statistik jam belajar IT
function statJam(jamArr) {
  // Validasi input pakai do...while
  let valid = false; // disiapkan buat input tanda apakah valid/ tidak, awalnya false
  do {
    // cek input apakah benar2 array,jamArr cek array gak kosong,x=>typeof x cek semua elemen harus angka
    if (Array.isArray(jamArr) && jamArr.length > 0 && jamArr.every(x => typeof x === "number")) {
      valid = true;
    } else {
      console.log("Input tidak valid! Harus array angka.");
      return;
    }
  } while (!valid); // di cek minimal sekali walaupun array kosong

  // Inisialisasi
  let jumlah = 0; // wadah total semua jam 
  let min = jamArr[0];
  let max = jamArr[0];

  // Cari jumlah, min, max
  for (let i = 0; i < jamArr.length; i++) { // di loop semua elemen array
    jumlah += jamArr[i]; // hasil ditambahkan ke jumlah
    if (jamArr[i] < min) min = jamArr[i]; // bandingkan untuk update nilai min dan max dgn nilai yang lain
    if (jamArr[i] > max) max = jamArr[i];
  }

  // Hitung rata-rata
  let rata = jumlah / jamArr.length;

  // Output semua jam (pakai forEach)
  console.log("Daftar jam belajar:");
  jamArr.forEach((jam, i) => {
    console.log(`Hari ${i+1}: ${jam} jam`);
  });

  // Return string hasil
  return `Jam belajar terbanyak ${max}, tersedikit ${min}, rata-rata ${rata}`;
}

// Contoh eksekusi
console.log(statJam([3,6,2,5]));


// 13. selisih hafalan quran mingguan
function selisihHafalan(hafalanArr) {
  // Validasi input pakai do...while
  let valid = false;
  do {
    if (
      Array.isArray(hafalanArr) && // pastikan input berupa aray
      hafalanArr.length > 1 && // pastikan ada minimal 2 minggu buat bisa bandingan
      hafalanArr.every(x => typeof x === "number") // semua isi array harus angka
    ) {
      valid = true;
    } else {
      console.log("Input tidak valid! Harus array angka dengan minimal 2 minggu.");
      return;
    }
  } while (!valid);

  let hasil = [];

  // Loop for untuk cari selisih
  for (let i = 0; i < hafalanArr.length - 1; i++) { // loop berjalan dari minggu pertama sampai minggu terakhir -1
    let selisih = hafalanArr[i + 1] - hafalanArr[i]; // perbedaan hafalan minggu sebelumnya.
    let status = "";

    // Switch untuk tentukan naik/turun/tetap
    switch (true) { // digunakan true supaya bisa menghandle kondisi seperti if else
      case selisih > 0:// klo selisihnya positif
        status = `naik ${selisih} ayat`;
        break;
      case selisih < 0:// klo selisihnya menurun
        status = `turun ${Math.abs(selisih)} ayat`;
        break;
      default: // klo 0 berarti tetap
        status = "tetap";
    }

    hasil.push(`Minggu ${i + 1}-${i + 2}: ${status}`);// simpan hasil perbandingan ke array hasil
  } // minggu 1 - 2 naik 5 ayat

  // Output pakai forEach
  console.log("Perbandingan hafalan:");// cetak semua hasil ke console, baris per baris
  hasil.forEach(r => console.log(r));

  // Return string hasil
  return hasil.join(", ");// hasil dikembalikan dalam bentuk string, dipisah dg koma
}

// Contoh eksekusi
console.log(selisihHafalan([5, 10, 15, 12]));


// 14. format guru berdasarkan gender
function formatGuru(namaArr, genderArr) {
  // Validasi pakai while
  let i = 0;
  while (
    (!Array.isArray(namaArr) || !Array.isArray(genderArr)) ||
    (namaArr.length !== genderArr.length)
  ) {
    console.log("Input tidak valid! Array harus sama panjang.");
    return;
  }

  let formatted = [];

  // Loop paralel
  for (let i = 0; i < namaArr.length; i++) {
    let nama = namaArr[i];
    let gender = genderArr[i];
    let title = "";

    // Switch gender
    switch (gender) {
      case "L":
        title = `Ustadz ${nama}`;
        break;
      case "P":
        title = `Ustadzah ${nama}`;
        break;
      default:
        title = `Guru ${nama}`;
    }

    formatted.push(title);
  }

  // Output pakai forEach
  console.log("Daftar Guru:");
  formatted.forEach(g => console.log(g));

  // Return string
  return formatted.join("; ");
}

// Contoh eksekusi
console.log(formatGuru(["Ahmad", "Fatimah"], ["L", "P"]));


// 15. rekap santri tamat qur'an
function rekapTamat(khatamArr) {
  // Validasi input dengan do...while
  let valid = false;
  do {
    if (
      Array.isArray(khatamArr) &&
      khatamArr.length > 0 &&
      khatamArr.every(x => typeof x === "number")
    ) {
      valid = true;
    } else {
      console.log("Input tidak valid! Harus array berisi angka.");
      return;
    }
  } while (!valid);

  let countKhatam = 0;

  // Loop dengan forEach
  khatamArr.forEach((juz, i) => {
    // if untuk cek langsung
    if (juz === 30) {
      countKhatam++;
    }

    // switch contoh tambahan
    switch (true) {
      case juz === 30:
        console.log(`Santri ${i + 1}: khatam`);
        break;
      case juz < 30:
        console.log(`Santri ${i + 1}: belum khatam`);
        break;
      case juz > 30:
        console.log(`Santri ${i + 1}: data melebihi 30 juz (tidak valid)`);
        break;
    }
  });

  // Return string hasil
  return `${countKhatam} santri telah khatam 30 juz`;
}

// Contoh eksekusi
console.log(rekapTamat([28, 30, 35, 30, 29]));



// 16. STATUS nilai ujian IT/madrasah
function statusNilai(nilaiArr) {
  // Validasi input pakai do...while
  let valid = false;
  do {
    if (
      Array.isArray(nilaiArr) &&
      nilaiArr.length > 0 &&
      nilaiArr.every(x => typeof x === "number")
    ) {
      valid = true;
    } else {
      console.log("Input tidak valid! Harus array angka minimal 1 data.");
      return;
    }
  } while (!valid);

  let hasil = [];

  // Loop pakai for
  for (let i = 0; i < nilaiArr.length; i++) {
    let n = nilaiArr[i];
    let status = "";

    // Switch dalam if
    if (n >= 0 && n <= 100) {
      switch (true) {
        case n >= 75:
          status = "Baik";
          break;
        case n >= 60:
          status = "Cukup";
          break;
        default:
          status = "Kurang";
      }
    } else {
      status = "Nilai tidak valid";
    }

    hasil.push(`${n}: ${status}`);
  }

  // Output tambahan pakai forEach
  console.log("Rekap Nilai:");
  hasil.forEach(h => console.log(h));

  // Return string gabungan
  return hasil.join(", ");
}

// Contoh eksekusi
console.log(statusNilai([80, 60, 75, 55]));


// 17. hari izin/ sakit mingguan
function hariIzinSakit(statusArr) {
  // Validasi input pakai while
  let i = 0;
  while (!Array.isArray(statusArr) || statusArr.length === 0) {
    console.log("Input tidak valid! Harus array string dengan minimal 1 data.");
    return;
  }

  let hariTidakHadir = [];

  // Loop pakai for
  for (let i = 0; i < statusArr.length; i++) {
    let status = statusArr[i];

    // if dulu untuk filter
    if (status === "Izin" || status === "Sakit") {
      switch (status) {
        case "Izin":
          hariTidakHadir.push(i + 1);
          break;
        case "Sakit":
          hariTidakHadir.push(i + 1);
          break;
      }
    }
  }

  // Return string
  if (hariTidakHadir.length === 0) {
    return "Semua santri hadir";
  } else {
    return `Santri izin/sakit pada hari ke-${hariTidakHadir.join(",")}`;
  }
}

// Contoh eksekusi
console.log(hariIzinSakit(["Hadir", "Izin", "Sakit", "Hadir", "Izin"]));



// 18. validasi NIS
function validasiNIS(nisArr) {
  // Validasi input dengan do...while
  let valid = false;
  do {
    if (
      Array.isArray(nisArr) &&
      nisArr.length > 0 &&
      nisArr.every(x => typeof x === "string")
    ) {
      valid = true;
    } else {
      console.log("Input tidak valid! Harus array string dengan minimal 1 data.");
      return;
    }
  } while (!valid);

  let nisValid = [];
  let nisInvalid = [];

  // Loop pakai for
  for (let i = 0; i < nisArr.length; i++) {
    let nis = nisArr[i];

    // if/switch untuk validasi panjang
    switch (true) {
      case nis.length === 6:
        nisValid.push(nis);
        break;
      default:
        nisInvalid.push(nis);
    }
  }

  // Susun output
  let output = [];
  if (nisValid.length > 0) output.push(`NIS valid: ${nisValid.join(", ")}`);
  if (nisInvalid.length > 0) output.push(`NIS invalid: ${nisInvalid.join(", ")}`);

  return output.join("; ");
}

// Contoh eksekusi
console.log(validasiNIS(["123456","654321","54321"]));



// 19. Kelompok Kegiatan Harian
function kelompokKegiatan(arrKegiatan) {
  // Validasi sederhana
  if (!Array.isArray(arrKegiatan) || arrKegiatan.length === 0) {
    return "Input tidak valid!";
  }

  let rekap = {};

  // Loop pakai for
  for (let i = 0; i < arrKegiatan.length; i++) {
    let kegiatan = arrKegiatan[i];

    // if untuk cek apakah sudah ada
    if (rekap[kegiatan]) {
      rekap[kegiatan]++;
    } else {
      // switch bisa dipakai kalau mau tambahkan kategori khusus
      switch (kegiatan) {
        default:
          rekap[kegiatan] = 1;
      }
    }
  }

  // Susun output
  let hasil = [];
  Object.keys(rekap).forEach(kegiatan => {
    hasil.push(`${kegiatan}: ${rekap[kegiatan]} kali`);
  });

  return hasil.join("; ");
}

// Contoh eksekusi
console.log(kelompokKegiatan(["Sholat","Ngaji","Olahraga","Coding","Ngaji"]));



// 20.Angka yang paling sering muncul pad ujian
function angkaSeringMuncul(angkaArr) {
  // Validasi input
  if (!Array.isArray(angkaArr) || angkaArr.length === 0 || !angkaArr.every(x => typeof x === "number")) {
    return "Input tidak valid!";
  }

  let frekuensi = {};

  // Hitung frekuensi pakai forEach
  angkaArr.forEach(num => {
    if (frekuensi[num]) {
      frekuensi[num]++;
    } else {
      frekuensi[num] = 1;
    }
  });

  // Cari angka dengan frekuensi max pakai for
  let max = 0;
  let kandidat = [];

  for (let angka in frekuensi) {
    if (frekuensi[angka] > max) {
      max = frekuensi[angka];
      kandidat = [angka];
    } else if (frekuensi[angka] === max) {
      kandidat.push(angka);
    }
  }

  // Switch untuk cek apakah ada lebih dari 1 kandidat
  switch (true) {
    case kandidat.length === 1:
      return `Angka ${kandidat[0]} muncul paling sering, sebanyak ${max} kali`;
    default:
      return `Ada beberapa angka (${kandidat.join(", ")}) yang sama-sama sering muncul, yaitu ${max} kali`;
  }
}

// Contoh eksekusi
console.log(angkaSeringMuncul([1,2,2,3,1,2]));
console.log(angkaSeringMuncul([4,5,4,5,6]));

