// soal 2 
// 1. cek waktu sholat
function cekWaktuShalat(jam) {
    if (jam >= 4 && jam <= 5) {
        return "Waktu Subuh";
    } else if (jam >= 12 && jam <= 13) {
        return "Dzuhur";
    } else if (jam >= 15 && jam <= 16) {
        return "Ashar";
    } else if (jam >= 18 && jam < 19) {
        return "Maghrib";
    } else if (jam >= 19 && jam <= 20) {
        return "Isya";
    } else {
        return "Bukan waktu shalat";
    }
} 
console.log(cekWaktuShalat(4)); // waktu shubuh
console.log(cekWaktuShalat(12)); // zhuhur
console.log(cekWaktuShalat(15)); // ashar 
console.log(cekWaktuShalat(18)); // maghrib 
console.log(cekWaktuShalat(19)); // isya
console.log(cekWaktuShalat(21)); // bukan waktu shalat

// 2. validasi usia santri
function validasiUsia(usia) {
    if (usia >= 12 && usia <= 18) {
        return "Layak mondok";
    } else {
        return "Tidak layak mondok";
    }
}
console.log(validasiUsia(12)); // layak mondok
console.log(validasiUsia(15)); // tidak layak mondok

// 3. nilai akhlaq santri
function nilaiAkhlak(nilai) {
    if (nilai >= 85) {
        return "Akhlak mulia";
    } else {
        return "Perlu pembinaan";
    }   
}
console.log(nilaiAkhlak(85)); // akhlak mulia
console.log(nilaiAkhlak(75)); // perlu pembinaan

// 4. perlengkapan sholat 
function perlengkapanShalat(pakaiSarung, pakaiKopiah, bawaSajadah) {
    if (pakaiSarung && pakaiKopiah && bawaSajadah) {
        return "Siap shalat";
    } else {
        return "Belum siap shalat";
    }
}

console.log(perlengkapanShalat(true, true, true));   // Siap shalat
console.log(perlengkapanShalat(true, false, true));  // Belum siap shalat
console.log(perlengkapanShalat(false, true, true));  // Belum siap shalat
console.log(perlengkapanShalat(false, false, true)); // Belum siap shalat

// 5. cek izin keluar pondok 
function cekIzinKeluar(alasan) {
    let lowerCaseAlasan = alasan.toLowerCase();// mau alasan itu user tulis seperti apa-pun tetap dibaca huruf kecil semua
    if (lowerCaseAlasan === "sakit" || lowerCaseAlasan === "keluarga" || lowerCaseAlasan === "prestasi") {
        return "Izin diterima";
    } else {
        return "Izin ditolak";
    }

}
console.log(cekIzinKeluar("sakit")); // izin diterima
console.log(cekIzinKeluar("SaKit")); // izin diterima
console.log(cekIzinKeluar("Jalann-jalan")); // izin ditolak


// switch

// 6. jadwal kegiatan harian
function jadwalKegiatanHarian(hari) {
    switch (hari) {
        case 1:
            return "ngaji";
        case 2:
            return "makan";
        case 3:
            return"mandi";
        case 4:
            return "sholat";
        case 5:
            return "produktif";
        case 6:
            return "kerja bakti";
        case 7:
            return "Libur";
        default:
            return "invalid";
    }
}


console.log(jadwalKegiatanHarian(1)); // ngaji
console.log(jadwalKegiatanHarian(2)); // makan
console.log(jadwalKegiatanHarian(3)); // mandi
console.log(jadwalKegiatanHarian(4)); // sholat
console.log(jadwalKegiatanHarian(5)); // produktif
console.log(jadwalKegiatanHarian(6)); // kerja bakti
console.log(jadwalKegiatanHarian(7)); // libur

// 7. Menu kantin santri
function menuKantinSantri(nomorMenu) {
    switch (nomorMenu) {
        case 1:
            return "nasi goreng";
        case 2 :
            return "mie goreng";
        case 3 :
            return"sate";
        case 4 :
            return "soto";
        case 5 :
            return  "aqua";
        default:
            return "invalid";
   }
}
console.log(menuKantinSantri(1)); // nasi goreng
console.log(menuKantinSantri()); // invalid
console.log(menuKantinSantri(2)); // mie goreng
console.log(menuKantinSantri(3)); // sate
console.log(menuKantinSantri(4)); // soto
console.log(menuKantinSantri(5)); // aqua

// 8. kode kamar asrama
function kodeKamarAsrama(kodeKamar) {
    switch (kodeKamar) {
        case 1:
            console.log("kamar A");
            break;
        case 2 :
            console.log("kamar B");
            break;
        default:
            console.log("invalid");
    }
}
kodeKamarAsrama(1); // kamar A
kodeKamarAsrama(2); // kamar B
kodeKamarAsrama(3); // invalid


// 9. tingkat pelanggaran
function tingkatPelanggaran(kodePelanggaran) {
    switch (kodePelanggaran) {
        case 1:
            console.log("nasihat");
            break;
        case 2 :
            console.log("hafalan taubat");
            break;  
        case 3 :
            console.log("kerja sosial");
            break;
        case 4 :
            console.log("skors");
            break;
        default:
            console.log("invalid");
    }
}
tingkatPelanggaran(1); // nasihat
tingkatPelanggaran(2); // hafalan taubat
tingkatPelanggaran(3); // kerja sosial
tingkatPelanggaran(4); // skors
tingkatPelanggaran(5); // invalid

// 10. jabatan pengurus
function jabatanPengurus(jabatan) {
    switch (jabatan) {
        case "kesantrian":
            console.log("memastikan santri");
            break;
        case "musyrif":
            console.log("membantu kesantrian");
            break;
        case "ketua angkatan":
            console.log("membantu musyrif");
            break;
        case "wakil ketua angkatan":
            console.log("membantu ketua angkatan");
            break;
        default:
            console.log("invalid");
    }   

}
jabatanPengurus("kesantrian"); // memastikan santri
jabatanPengurus("musyrif"); // membantu kesantrian
jabatanPengurus("ketua angkatan"); // membantu musyrif
jabatanPengurus("wakil ketua angkatan"); // membantu ketua angkatan



// for loop
// 11. daftar santri hadir
let namaSantri = [
    "budi",
    "caca",
    "bambang",
    "kiki",
    "zahra",
]
function daftarSantriHadir(namaSantri) {
    for (let i = 0; i < namaSantri.length; i++) {
        console.log(namaSantri[i]);
    }
}
daftarSantriHadir(namaSantri);

// 12. total hafalan mingguan
function totalHafalanMingguan(jumlahHafalan) {
    let hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];
    let total = 0;
    for (let i = 0; i < hari.length; i++) {
        console.log(hari[i] + " : " + jumlahHafalan[i] + " ayat");
        total += jumlahHafalan[i]; // menginisialisasikan ulang total

    }
    console.log("total seminggu : " + total + " ayat");
}
totalHafalanMingguan([10, 20, 30, 40, 50, 60, 70]);

// 13. tabel jadwal sholat
function tabelJadwalShalat(jamShalat, namaShalat) {
    for (let i = 0; i < jamShalat.length; i++) {
        console.log(jamShalat[i] + " - " + namaShalat[i]);// jamsholat - waktusholat
    }
}
tabelJadwalShalat(["04:00", "12:00", "15:00", "18:00", "19:00"], ["subuh", "dzuhur", "ashar", "maghrib", "isya"]);


// 14. motivasi santri
function motivasiSantri(N) {
    for (let i = 0; i < N; i++) {
        console.log("Semangat santri!");
    }
}
motivasiSantri(5);// semangat santri! 5x

// 15. pola bintang segitiga
function polaBintangSegitiga(N) {
    for (let i = 1; i <= N; i++) { // 
        let bintang = "";
        for (let j = 1; j <= i; j++) {
            bintang += "*";
        }
        console.log(bintang);
    }

}
polaBintangSegitiga(5);

// operator aritmatika

// 16. hitung zakat
function hitungZakat(nominalHarta, nisab) {
    if (nominalHarta >= nisab) {
        return nominalHarta * 0.025; // zakat 25% dari harta
    } else {
        return "belum wajib zakat";
    }
}
console.log(hitungZakat(1000000, 85)); // 25000 // nisab nya 85 
console.log(hitungZakat(750000, 85)); // belum wajib zakat

// 17. validasi login santri
function validasiLogin(username, password) {
    if (username === "admin" && password === "password123") {
        return "login berhasil";
    } else {
        return "login gagal";
    }
}
console.log(validasiLogin("admin", "password123")); // login berhasil
console.log(validasiLogin("admin", "password")); // login gagal

// 18. capaian hafalan akhlaq
function capaianHafalanAkhlak(jumlahHafalan, nilaiAkhlak) {
    if (jumlahHafalan >= 10 && nilaiAkhlak >= 80) {
        return "lulus";
    } else {
        return "belum lulus";
    }
}
console.log(capaianHafalanAkhlak(10, 80)); // lulus
console.log(capaianHafalanAkhlak(9, 80)); // belum lulus

// 19. diskon buku kitab
function diskonBukuKitab(usia, totalBelanja) {
    if (usia < 18 || totalBelanja > 1000000) {
        return totalBelanja * 0.1; // diskon 10%
    } else {
        return 0;
    }
}
console.log(diskonBukuKitab(15, 1000000));

// 20. validasi password kompleks
function validasiPasswordKompleks(password) {
    if (password.length >= 8 && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/\d/)) {
        // minimal panjang password ada 8 karakter  // .match(/[A-Z]/) memastikan pola ad huruf besar didalam teks 
        // .match(/[a-z]/) memastikan pola password harus ada huruf kecil // .match(/\d/) memastikan ada digit/angka \d ad utk digit
        return "password valid";
    } else {
        return "password tidak valid";
    }
}
console.log(validasiPasswordKompleks("admin", "password123")); // password valid
console.log(validasiPasswordKompleks("admin", "password")); // password tidak valid

// function sederhana)

// 21. jadwal kajian rutin
function jadwalKajianRutin(namaUstadz, hari) {
    console.log("Ngaji bersama " + namaUstadz + " setiap hari " + hari);
}
jadwalKajianRutin("ahmad", "senin");
jadwalKajianRutin("budi", "selasa");

// 22. hitung luas dan keliling 
function hitungLuasKeliling(panjang, lebar) {
    let luas = panjang * lebar;
    let keliling = 2 * (panjang + lebar);
    return {luas, keliling};
}
console.log(hitungLuasKeliling(5, 10)); // {luas: 50, keliling: 30}

// 23. konversi tahun hijriyah ke masehi
function konversiTahunHijriyah(tahunHijriyah) {
    return tahunHijriyah += 622;
}
console.log(konversiTahunHijriyah(2025)); // 

// 24. hitung total hafalan
function hitungTotalHafalan(jumlahHafalan) {
    let total = 0;
    for (let i = 0; i < jumlahHafalan.length; i++) {
        total += jumlahHafalan[i];
    }
    return total;
}
console.log(hitungTotalHafalan([10, 20, 30, 40, 50])); //       


// 25. balikkan nama santri
function balikkanNamaSantri(nama) {
    let namaTerbalik = "";
    for (let i = nama.length - 1; i >= 0; i--) {
        namaTerbalik += nama[i];
    }
    return namaTerbalik;
}
console.log(balikkanNamaSantri("budi"))





