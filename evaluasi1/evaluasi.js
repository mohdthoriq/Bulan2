// 1.
// let total = 0;
// let datapesanan = [];
// function pesanMenu() {
//     let ulang = true;
//      do {
//         let pilihan = prompt("masukkan angka pesanan anda");
//         switch (pilihan) {
//             case "1":
//                 total += 15000
//                 datapesanan.push("mie Ayam Rp.15000");
//             break;
//             case "2":
//                 total += 10000
//                 datapesanan.push("nasi goreng Rp.10000");
//             break;
//             case "3":
//                 total += 5000
//                 datapesanan.push("es teh Rp.5000");
//             break;
//             default:
//                 alert("pesanan tidak ada");

//      }
//      ulang = confirm("mau pesan lagi?");
//     } while (ulang )

//         document.getElementById('tag1').innerHTML = `${datapesanan.join("<br>")}`;
//         document.getElementById('tag2').innerHTML = `total : ${total}`;

//         // 2. diskon
//         let diskon = 0;
//         if (total >= 50000) {
//             diskon = total * 0.1;
//             total -= diskon;
//             document.getElementById('tag3').innerHTML = `diskon : ${diskon}`;
//             document.getElementById('tag4').innerHTML = `total : ${total}`;
//         } else {
//             document.getElementById('tag3').innerHTML = "anda tidak mendapatkan diskon";
//         }

// }


// //  3.
// let penjualan = [
//     { "mie Ayam": 10,
//      "nasi goreng": 15,
//      "es teh": 20}
// ]
// let data = penjualan[0];
// if (data["mie Ayam"] > data["nasi goreng"] && data["mie Ayam"] > data["es teh"]) {
//     console.log(`yang paling laris adalah mie Ayam ${data["mie Ayam"]}`);
// } else if (data["nasi goreng"] > data["mie Ayam"] && data["nasi goreng"] > data["es teh"]) {
//     console.log(`yang paling laris adalah nasi goreng ${data["nasi goreng"]}`);
// } else {
//     console.log(`yang paling laris adalah es teh ${data["es teh"]}`);
// }


// // 4.
// let level = prompt("masukkan level pelanggan");
// let belanja = parseInt(prompt("masukkan total belanja"));
// let diskon = 0;
// let total = 0;
// switch (level) {
//     case "vip":
//         diskon = 0.15;
//         break;
//     case "member":
//         diskon = 0.1;
//         break;
//     default:
//         diskon = 0.05;
//         break;
// }
// total = belanja - (belanja * diskon);

// console.log(`level: ${level}`);
// console.log(`total belanja: ${belanja}`);
// console.log(`diskon: ${diskon * 100}%`);
// console.log(`total setelah diskon: ${total}`);

    


// 5.
// let penjualan = [];
// let total = 0;

// for (let i = 1; i <= 7; i++) {
//     let input;
//     do {
//         input = parseInt(prompt(`masukkan penjualan hari ke-${i}`));
//     } while (isNaN(input));

//     penjualan.push(input);
//     total += input;
// }

// // hitung rata-rata
// let rata = total/penjualan.length;

// console.log(`total: ${total}`);
// console.log(`rata-rata: ${rata.toFixed(2)}`);



// // 6.
// let barang = [
//    { nama: "kaos", harga: 75000, stock: 50},
//    { nama: "celana", harga: 150000, stock: 30},
//     {nama: "jaket", harga: 200000, stock: 15}
// ];
// console.log(barang[0]);// kaos

// // 7. 
// function hitungPoin(nama, transaksi) {
//     let nilaiPerPoin = 10000;
//     let totalPoin = 0;
//     let output = ""; // string final

//     for (let i = 0; i < transaksi.length; i++) {
//         let poin = transaksi[i] / nilaiPerPoin;
//         totalPoin += poin;
//         output += `${nama} belanja Rp${transaksi[i]} dan dapat ${poin} poin\n`;
//     }

//     output += `Total poin ${nama}: ${totalPoin}`;
//     return output;
// }

// console.log(hitungPoin("thoriq", [30000, 200000, 150000]));

// 8.
// let data = [
//     { nama: "kaos", harga: 75000, stock: 50},
//     { nama: "celana", harga: 150000, stock: 30},
//     { nama: "jaket", harga: 200000, stock: 8}
// ];
// for (let i = 0; i < data.length; i++) {
// if (data[i].stock < 10) {
//     console.log(`${data[i].nama} dapat bonus 5%: Rp.${data[i].harga * 0.05}`)
// } else {
//     console.log(`${data[i].nama} tidak dapat bonus`);
// }
// }


// 9.
// let barang = [
//     { nama: "kaos", stock: 50},
//     { nama: "celana", stock: 30},
//     { nama: "jaket", stock: 15},
//     { nama: "sepatu", stock: 20},
//     { nama: "topi", stock: 10},
//     { nama: "tas", stock: 5}
// ]
// for (let i = 0; i < barang.length; i++) {
// if (barang[i].stock < 20) {
//     console.warn(`${barang[i].nama} stock kurang dari 20`);
// } else {
//     console.log(`${barang[i].nama} stock cukup`);  
// }
// }


// 10.
// let poin = [50, 150, 200, 500];
// let data = [];
// for (let i = 0; i < poin.length; i++) {
// if (poin[i] < 100) {
//     data.push("Bronze");
// } else if (poin[i] <= 499) {
//     data.push("Silver");
// } else {
//     data.push("Gold");
// }
// }
// for (let i = 0; i < data.length; i++) {
// console.log(`poin: ${poin[i]}, level: ${data[i]}`);
// }


// 11.
// let nilai = [80,90,50,70,60];
// let total = 0;


// for (let i = 0; i < nilai.length; i++) {
//     total += nilai[i];

// }
// let rata = total/nilai.length;
// console.log(rata);


// 12. 
// let nilai = [85,79,55,64];

// for (let i = 0; i < nilai.length; i++) {
// let grade = "";
//     switch (true) {
//         case nilai[i] >= 85:
//             grade = "A";
//             break;
//         case nilai[i] >= 70:
//             grade = "B";
//             break;
//         case nilai[i] >= 60:
//             grade = "C";
//             break;
//         default:
//             grade = "D";
//             break;
//     }
//     console.log(nilai[i], grade);


// }


// 13.
// function cariSiswa(nama) {
//     let siswa = [];
//     let nilai = 0;
//     switch (nama) {
//         case "andi":
//             nilai = 80;
//             break;
//         case "budi":
//             nilai = 90;
//             break;
//         case "caca":
//             nilai = 50;
//             break;
//         case "didi":
//             nilai = 70;
//             break;
//         case "ela":
//             nilai = 60;
//             break;
//         default:
//             nilai = 0;
//             break;
//     }
//     siswa.push(nama, nilai);
//     return siswa;

// }
// console.log(cariSiswa("andi"));


// 14.
// let nilaiSiswa = [["andi", 100,90,80,90], ["budi", 90,76,81,90], ["caca", 90,85,81,90], ["didi", 89,95,81,90], ["ela", 98,89,81,90]];
// let rataSiswa = [];

// for (let i = 0; i < nilaiSiswa.length; i++) {
//     let total = 0;
//     for (let j = 1; j < nilaiSiswa[i].length; j++) {
//         total += nilaiSiswa[i][j];
//     }
//     let rata = total / (nilaiSiswa[i].length - 1);
//     rataSiswa.push(rata);
// }
// for (let i = 0; i < rataSiswa.length; i++) {
//     if (rataSiswa[i] >= 80) {
//         console.log(`${nilaiSiswa[i][0]} dapat reward`);
//     } else {
//         console.log(`${nilaiSiswa[i][0]} tidak dapat reward`);
//     }
// }


// 15.
// let nilaiSis = [["andi", 80,79,55,64], ["budi", 90,76,81,90], ["caca", 50,76,81,90], ["didi", 70,76,81,90], ["ela", 60,76,81,90]];
// let rataSis = [];

// for (let i = 0; i < nilaiSis.length; i++) {
//     let total = 0;
//     for (let j = 1; j < nilaiSis[i].length; j++) {
//         total += nilaiSis[i][j];
//     }
//     let rata = total / (nilaiSis[i].length - 1);
//     rataSis.push({nama: nilaiSis[i][0], rata: rata});
// }

//     rataSis.sort((a, b) => b.rata - a.rata);
//     for (let i = 0; i < rataSis.length; i++){
//     console.log(`Rank ${i + 1}. ${rataSis[i].nama} memiliki rata-rata ${rataSis[i].rata.toFixed(0)}`);
// }


// 16
// let motorharian = [{jenis: "ringan"}, {jenis: "sedang"},{jenis: "berat"}];
// let serviceinfo = {
//     "ringan":{harga: 50000, waktu: 2},
//     "sedang":{harga: 100000, waktu: 4},
//     "berat":{harga: 200000, waktu: 8}
// };
// let pendapatan = 0;
// let waktu = 0;

// motorharian.forEach((motor, index) =>{
//     let jenis = motor.jenis;
//     let harga = serviceinfo[jenis].harga;
//     let jam = serviceinfo[jenis].waktu;

//     pendapatan += harga;
//     waktu += jam;

//     console.log(`motor ke-${index+1} service ${jenis} Rp.${harga} jam ${jam}`);
    
// });
// console.log("=====================");

// console.log(`total pendapatan: Rp.${pendapatan}`);
// console.log(`total waktu: ${waktu} jam`);


// // 17.
// let motorharian = [
//   { jenis: "ringan" },
//   { jenis: "sedang" },
//   { jenis: "berat" }
// ];

// let service = [
//   { jenis: "ringan", jam: 2},
//   { jenis: "sedang", jam: 4},
//   { jenis: "berat",  jam: 8}
// ];

// let jam = 8;  // waktu kerja sehari
// let waktu = 0;

// motorharian.forEach(motor => {
//   // cari service yang cocok
//   let data = service.find(item => item.jenis === motor.jenis);

//   if (data) { // cek biar gak error kalau ga ketemu
//     waktu += data.jam;
//     console.log(`${motor.jenis} → ${data.jam} jam,`);
//   }
// });

// // cek apakah bisa selesai hari ini
// if (waktu <= jam) {
//   console.log("Semua motor selesai hari ini ✅");
// } else {
//   console.log("Ada motor yang ditunda besok ❌");
// }

// console.log(`Total waktu: ${waktu} jam`);


// 18.
// let antrian = [];

// antrian.push("andi");
// antrian.push("budi");
// antrian.push("caca");
// antrian.push("didi");
// antrian.push("ela");

// for (let i = 0; i < antrian.length; i++) {
//     console.log(`antrian ke-${i+1}: ${antrian[i]}`);
// }

// // 19.
// let infoservice = {
//     "ringan": 7,
//     "sedang": 14,
//     "berat": 30
// };
// let motor = {nama: "andi", jenis: "sedang", tanggal:"2025-12-31"};
// let tanggal = new Date(motor.tanggal);

// let Garansi = infoservice[motor.jenis];
// tanggal.setDate(tanggal.getDate() + Garansi);

// console.log(`Garansi ${motor.nama} ${motor.jenis} sampai ${tanggal}`);


// 20.
// let motor = [
//     {jenis: "ringan"},
//     {jenis: "sedang"},
//     {jenis: "berat"}
// ]
// let service = {
//     "ringan": {harga: 20000,komisi:0.1},
//     "sedang": {harga: 40000,komisi:0.15},
//     "berat": {harga: 80000,komisi:0.2}
// };
// let data = [];

// let totalkomisi = 0;

// motor.forEach(motor => {
//     let info = service[motor.jenis];
//     let komisi = info.harga * info.komisi;
//     totalkomisi += komisi;
//     data.push({jenis: motor.jenis, komisi: komisi});

// });
// console.log(data);
// console.log(`total komisi: ${totalkomisi}`);


// 21.
// let paket = [
//     {jenis: "basic", harga: 500000, pertemuan: 4},
//     {jenis: "standard", harga: 800000, pertemuan: 8},
//     {jenis: "premium", harga: 1200000, pertemuan: 12}
// ];
// paket.forEach(p => {
//     let hargaPerPertemuan = p.harga / p.pertemuan;
//     console.log(`${p.jenis} → Rp.${hargaPerPertemuan} per pertemuan`);
// });


// 22.
// let paket = [
//     {jenis: "basic", harga: 500000, pertemuan: 4, cicilan: 2},
//     {jenis: "standard", harga: 800000, pertemuan: 8, cicilan: 3},
//     {jenis: "premium", harga: 1200000, pertemuan: 12, cicilan: 4}
// ];
// let data = [];

// paket.forEach(p => {
//     let cicilan = p.harga / p.pertemuan;
//     data.push({jenis: p.jenis,harga: p.harga,cicilan: p.cicilan, bayarcicilan:cicilan});
// });
// console.log(data);


// // 23.
// let ruangkelas = [
//     {nama: "A", kapasitas: 20,siswa: []},
//     {nama: "B", kapasitas: 15, siswa: []},
//     {nama: "C", kapasitas: 25, siswa: []},
//     {nama: "D", kapasitas: 10, siswa: []},
//     {nama: "E", kapasitas: 30, siswa: []}
// ];
// let pendaftaran = [];
// let kelasIndex = 0;


// pendaftaran.push("andi");
// pendaftaran.push("budi");
// pendaftaran.push("caca");
// pendaftaran.push("didi");
// pendaftaran.push("ela");

// for (let i = 0; i < pendaftaran.length; i++) {
//    while (ruangkelas[kelasIndex].siswa.length >= ruangkelas[kelasIndex].kapasitas) {
//     kelasIndex++;
//     }
//     ruangkelas[kelasIndex].siswa.push(pendaftaran[i]);

//    }
//    for (let j = 0; j < ruangkelas.length; j++) {
//     console.log(`Kelas: ${ruangkelas[j].nama}, Kapasitas: ${ruangkelas[j].siswa.length}/${ruangkelas[j].kapasitas}, Siswa: ${ruangkelas[j].siswa.join(", ")}`);
   
//  }


// // 24.
// let siswa = [
//     {nama: "andi", hadir: 12, total: 12},
//     {nama: "budi", hadir: 9, total: 12},
//     {nama: "caca", hadir: 10, total: 12},
//     {nama: "didi", hadir: 11, total: 12},
//     {nama: "ela", hadir: 8, total: 12}
// ];
// for (let i = 0; i < siswa.length; i++) {
//     let persentase = (siswa[i].hadir / siswa[i].total) * 100;
//     console.log(`${siswa[i].nama} : ${persentase.toFixed(0)}%`);
// }


// 25.
let paketArr = [
    {jenis:"basic", pertemuan: 4, harga: 500000, cicilan: 2},
    {jenis:"standard", pertemuan: 8, harga: 800000, cicilan: 3},
    {jenis:"premium", pertemuan: 12, harga: 1200000, cicilan: 4}
]
let siswa = [];
function pendaftaran(nama, paket) {
    let p = paketArr.find(p => p.jenis === paket);
    if (!p) {
        return "paket tidak ditemukan";
    }
    siswa.push({nama: nama, paket: p.jenis, harga: p.harga, cicilan: p.cicilan, bayarcicilan: p.harga / p.pertemuan});// default : semua belum hadir
    console.log(`${nama} berhasil daftar, paket ${p.jenis}`);
    
}

function bayar(nama, jumlah) {
    let s = siswa.find(s => s.nama === nama);
    if (!s) {
        console.log("siswa tidak ditemukan");
    }
    s.sudahbayar += jumlah;
    let sisa = s.harga - s.sudahbayar;
     
    console.log(`${nama} membayar Rp.${jumlah}, sisa ${sisa}`);
}


function absensi(nama, pertemuan) {
    let s = siswa.find(s => s.nama === nama);
    if (!s) {
        console.log("siswa tidak ditemukan");
    }
    if (pertemuan < 1 || pertemuan > s.paket.pertemuan) {
        console.log("pertemuan tidak valid");
    }
    // s.absensi[pertemuan - 1] = true;
    console.log(`${nama} hadir pada pertemuan ${pertemuan}`);

}

function laporan(nama) {
    console.log("===laporan=====");

    let total = 0;
    siswa.forEach(s => {
        total += s.harga;

        // let hadir = s.absensi.filter(a => a).length;
        // let persentase = (hadir / s.paket.pertemuan) * 100;
        console.log(`${nama} | paket: ${s.paket.jenis}`);
        console.log(`bayar: ${s.harga}/${s.paket.harga}`);
        // console.log(`kehadiran: ${hadir}/${s.paket.pertemuan} (${persentase.toFixed(0)}%)`);
});
    console.log(`total: ${total}`);

}
pendaftaran("andi", "basic");
pendaftaran("budi", "standard");
pendaftaran("caca", "premium");
bayar("andi", 100000);
bayar("budi", 200000);
bayar("caca", 300000);
absensi("andi", 1);
absensi("budi", 8);
absensi("caca", 6);
laporan("andi");
laporan("budi");
laporan("caca");

