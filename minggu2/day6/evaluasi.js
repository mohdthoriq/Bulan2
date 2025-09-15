// Studi Kasus: Sistem Manajemen 
console.log('=========================================');
console.log('                TUGAS');
console.log('=========================================');


let daftarTugas = []; // disini saya buat array kosong
let nextId = 1; // untuk id supaya bisa di increment mulai dari 1
function tambahTugas(teks) {
    const tugasBaru = { // memdeklarasi sebuah object tugasBaru
        id: nextId++, // id akan di ambil dari deklarasi nextid 
        teks, // biar aku yang nentuin teks nya maka disamain dengan parameter
        selesai: false
    };
    daftarTugas.push(tugasBaru); // memasukkan tugasBaru ke array daftar tugas
    console.log(`Tugas "${teks}" ditambahkan!`);

}
tambahTugas("ngoding");
tambahTugas("piket pagi");
tambahTugas("selesaikan evaluasi mingguan");
console.table(daftarTugas);

function tampilkanSemuaTugas() {
    console.log('=========================================');
    console.log("               Daftar Tugas");
    console.log('=========================================');
    if (daftarTugas.length === 0) { // jika didalam array daftarTugas masih kosong 
        console.log("Tidak ada tugas.");
    } else {
        daftarTugas.forEach(tugas => { // jika daftar tugas itu ada isi maka di cek selesainya 
            const status = tugas.selesai ? "Selesai" : "Belum Selesai"; // jika true berarti udah selesai : jika false berarti belum selesai
            console.log(`${tugas.id}. [${status}] ${tugas.teks}`);
        });
    }
}
tampilkanSemuaTugas();

console.log('===============================');
function tandaiSelesai(id) {
    const index = daftarTugas.findIndex(tugas => tugas.id === id);// untuk mencari id apakah di id indeks tugas itu == dengan id yang di masukkan
    if (index !== -1) { // jika id itu ditemukan 
        daftarTugas[index].selesai = true; // ubah status nya ke true/selesai
        console.log(`Tugas dengan ID ${id} sudah selesai.`); //  tampilkan klo udah selesai
    } else { // jika tidak ditemukan maka
        console.log(`⚠️  Tugas dengan ID ${id} tidak ditemukan.`);
    }
}
tandaiSelesai(2);
tandaiSelesai(50);

console.log('===============================');
console.log('  hapus tugas');
console.log('===============================');

function hapustugas(...id) { // rest karena 
    id.forEach(id => { // melooping data array [] id
        const index = daftarTugas.findIndex(tugas => tugas.id === id); // dicari apakah id yang di masukkan itu === denga id yang ada di array 
        if (index !== -1) { // jika ditemukan maka
            daftarTugas.splice(index, 1); // di slice atau dipotong start dari indeks dan panjang 1 = index 0
            console.log(`Tugas dengan ID ${id} berhasil dihapus.`);
        } else {
            console.log(`⚠️  Tugas dengan ID ${id} tidak ditemukan.`);
        }
})
}
hapustugas(1);
hapustugas(15);
console.log('\n');


tampilkanSemuaTugas();
console.table(daftarTugas);