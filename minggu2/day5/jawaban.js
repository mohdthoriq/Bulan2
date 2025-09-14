// 1.
const mahasiswa = {
    alice: { math: 85, english: 90, science: 88 },
    bob: { math: 78, english: 85, science: 82 },
    carol: { math: 92, english: 89, science: 94 }
};
let nama = Object.keys(mahasiswa); // untuk mengambil semua key(property) dari object 
console.log(nama); // outputnya akan bentuk string
for(let nama in mahasiswa) { // for...in dipakai untuk me looping semua key dari object dan akan keluar berupa string
    let nilai = Object.values(mahasiswa[nama]);// untuk mengambil semua nilai dari object, dijadika array
    let total = nilai.reduce((a, b) => a + b, 0);// menggabungkan semua nilai yang sudah diambil dari object tadi
    let rata = total / nilai.length;// rumus rata adalah rata = total keseluruhan nilai/dengan berapa banyak yang nilai yang digabung
    console.log(`${nama} rata-rata: ${rata.toFixed(2)}`); // tofixed untuk angka dibelakang koma
}
for (let [nama, value] of Object.entries(mahasiswa)) { // entries untuk mengembalikan pasangan array tiap element
    let namaArr = Object.values(value);
    let total = namaArr.reduce((a, b) => a + b, 0);
    let rata = total / namaArr.length;
    console.log(`${namaArr} rata-rata: ${rata.toFixed(2)}`);
}

let gabung = { ...mahasiswa, david: { math: 88, english: 91, science: 85 } };
console.log(gabung);

// 2
const playlist = [
    { judul: "Al-Fatihah", qari: "Mishary Rashid", durasi: 42, juz: 1 },
    { judul: "Al-Baqarah", qari: "Abdul Rahman As-Sudais", durasi: 7380, juz: 1 },
    { judul: "Ar-Rahman", qari: "Saad Al-Ghamdi", durasi: 810, juz: 27 },
    { judul: "Al-Mulk", qari: "Maher Al Muaiqly", durasi: 540, juz: 29 }
]

let juz1 = playlist.filter((item)=> item.juz === 1) // mengemballikan aray yang hanya berisi item juz1
console.log(juz1);

let total = playlist.reduce((a,b)=> a + b.durasi, 0) // menjumlahkan semua durasi
console.log(`Total Durasi : ${total} (${(total/60).toFixed(2)} jam)`);

let qori = playlist.map((item)=> `${item.judul} - ${item.qari}`) // mengubah setiap item jadi string
console.log(qori);

let durasi = playlist.reduce((a,b)=> {
   return a.durasi > b.durasi ? a : b;
}, 0)
console.log(`${durasi.judul} (${durasi.durasi} detik atau ${(durasi.durasi/60).toFixed()} menit)`);

let baru ={judul: "An Naba", qari: "Taha Al junaidy", durasi: 140, juz: 30} 
let playlistBaru = [baru, ...playlist]// memecahkan isi aray dan menggabungkan dengan array baru
console.log(playlistBaru);

// 3
const pengeluaran = [
    { hari: "Senin", kategori: "makan", jumlah: 25000 },
    { hari: "Senin", kategori: "transport", jumlah: 15000 },
    { hari: "Selasa", kategori: "makan", jumlah: 30000 },
    { hari: "Selasa", kategori: "hiburan", jumlah: 50000 },
    { hari: "Rabu", kategori: "makan", jumlah: 20000 }
];
let n2 = pengeluaran.reduce((a,b)=> a + b.jumlah, 0) // menjumlah kan semua jumlah
console.log(`Total: Rp ${n2.toLocaleString()}`); // bikin angka jadi format ribuan

let totalkategori = pengeluaran.reduce((a,b)=> { // a = object kosong
    if(!a[b.kategori]){ // kalau kategori belum ada
        a[b.kategori] = b.jumlah // bikin property baru a[makan] = jumlah
    }else{ // jka ada
        a[b.kategori] += b.jumlah // tambahkan jumlahnya
    }
    return a
}, {})
console.log(totalkategori);

let hari = pengeluaran.reduce((a,b)=> {
    if(!a[b.hari]){
        a[b.hari] = b.jumlah
    }else{
        a[b.hari] += b.jumlah
    }
    return a
}, {})
console.log(hari);

let keluarTerbesar = pengeluaran.reduce((a,b)=> {
    return a.jumlah > b.jumlah ? a : b; // bandingkan semua jumlah
}, 0)
console.log(keluarTerbesar);

let peng = pengeluaran.filter((item)=> item.jumlah >= 25000)// nyaring hanya data dengan jumlah >= 25000
console.log([`${peng.length} pengeluaran >= 25000`]);

// 4.
const kontakLama = { mama: "08123456789", papa: "08987654321" }; // object biasa
const kontakBaru = [["adik", "08111222333"], ["kakak", "08444555666"]]; // array berisi pasangan key dan value
const gabungKontak = {...kontakLama, ...Object.fromEntries(kontakBaru)} // ubah array jadi object// dan menggabungkan 2 object
console.log(gabungKontak);

let nomor = Object.values(gabungKontak) // ambil semua value dari object
console.log(nomor);

let tampilkan = Object.entries(gabungKontak).map((item)=> `${item[0]}: ${item[1]}`) // hasil array berisi key dan value // ubah tiap pasangan jadi string
console.log(tampilkan);

function convertperfix(nomor) {
    nomor = nomor.toString().trim(); // pastiin bentuknya string dan tidak ada spasi
    if (nomor.startsWith('0')) { // kalau angka dimulai dari 0
        return '+62' + nomor.slice(1); // slice karakter 1 = 0, ubah jadi +62
    }
    return nomor;
}
let hasil = nomor.map(a => convertperfix(a)); // jalan kan setiap function ke setiap nomor
console.log(hasil);

// 5.
const nilaiKelas = [
    { nama: "Alice", tugas: [80, 85, 90], uts: 88, uas: 92 },
    { nama: "Bob", tugas: [75, 80, 85], uts: 82, uas: 86 },
    { nama: "Carol", tugas: [90, 95, 88], uts: 91, uas: 89 }
];
let rata = nilaiKelas.map((item)=> { // ambil tata2 tugas masing2 siswa
    let tugas = item.tugas.reduce((a,b)=> a + b, 0) / item.tugas.length // ngejumlahin semua nilai tugas dibagi dengan jumlah tugas
    return `${item.nama}: ${tugas.toFixed()}` // membulatkan tanpa desimal
})
console.log(rata);
let nilaiAkhir = nilaiKelas.map((item)=> { 
    let Akhir = item.tugas.reduce((a,b)=> a + b, 0) / item.tugas.length * 0.3 + item.uts * 0.3 + item.uas * 0.4
    return `${item.nama}: ${Akhir.toFixed(1)}`
    
})
console.log(nilaiAkhir);

let lulus = nilaiAkhir.filter((item)=> {
    if (nilaiAkhir  >= 80){
        return `${item} (Lulus)`
    }else{
        return `${item} (Tidak Lulus)`
    }
})
console.log(lulus);


let terbaik = nilaiAkhir.reduce((a,b)=> {
    return a.nilai > b.nilai ? a : b;
}, 0)
console.log(`${terbaik} (nilai akhir tertinggi)`);