//###1
// ada 8 method function dalam js
// 1. function declaration
function halo(name) {
    console.log(`halo ${name}`);
}
halo("budi");
function tempatkerja(kantor) {
    console.log(`saya bekerja di ${kantor}`);
}
tempatkerja("PT.ABC");
// 2. function expression(disimpan kedalam variabel)
const halo2 = function(name) {
    console.log(`halo ${name}`);
}
// 3. arrow function
const halo3 = (name) => {
    console.log(`halo ${name}`);
}
// 4. anonymous function(tanpa nama,biasanya langsung dipakai)
setTimeout(function() {
    console.log("jalan setelah 1 detik");
}, 10000);
// 5. IIFE (Immedetelly Invoked function Expression)
(function() {
    console.log("ini IIFE");
})();
// 6. Generatot function (pakai function dan yield)
function* angka () {
    yield 1;
    yield 2;
    yield 3;
}
// 7.Async function (buat handle promise dengan await)
async function getData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}
// 8.Method didalam object/class / closure function
class Mahasiswa {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;


        // utk TPK
        let IPK = 0;
        
        // method
        this.setIPK = function(nilai) {
            IPK = nilai;
        };
        this.getIPK = function() {
            return IPK;
        }
    };

    tampilkandata() {
        return `Nama: ${this.nama}, Umur: ${this.umur}`
    }

}
const mhs1 = new Mahasiswa("budi", 20);
console.log(mhs1.tampilkandata());
mhs1.setIPK(3.5);
console.log(mhs1.getIPK());



//###.2
// case 1
function buatAbsensi(){
    let hadir = 0;
    return function(){ // closure, bisa ingat nilai hadir
        hadir++; // setiap kali dipanggil tambah 1
        return `santri hadir ${hadir} kali`; // kembalikan string hasil
     };
}
const absensi = buatAbsensi();// untuk instance absensi baru
console.log(absensi());
console.log(absensi());
console.log(absensi());

// case 2
function buatTabungan() {
    let saldo = 0;
    return {
        tambah: (uang) => saldo += uang,// method untuk menambah saldo
        lihat: () => saldo // method untuk melihat saldo
    }
}


const tabungan = buatTabungan();
tabungan.tambah(1000); // tambah ke saldo
console.log(tabungan.lihat()); 


//case 3
function buatAkun(username, password) {
    return {
        login: (usernameLogin, passwordLogin) => (usernameLogin === username && passwordLogin === password) ? "Login berhasil" : "Login gagal",
    };
}
const akun = buatAkun("budi", "12345");
console.log(akun.login("budi", "12345")); // login berhasil
console.log(akun.login("budi", "67890")); // login gagal

// case 4
function buatkalkulator(){
    let total = 0;
    return {
        tambah: (x) => total += x,
        kurang: (x) => total -= x,
        lihat: () => total
    };

}
const kalkulator = buatkalkulator();
kalkulator.tambah(10);
kalkulator.tambah(20);
kalkulator.kurang(5);
console.log(kalkulator.lihat()); // 25

// case 5
function buatIDMahasiswa() {
    let id = 0;
    return function() {
        id++;
        return `MHS-${id}`;
};
}
const idMahasiswa = buatIDMahasiswa();
console.log(idMahasiswa()); // MHS-1
console.log(idMahasiswa()); // MHS-2
console.log(idMahasiswa()); // MHS-3


// ###3.
// case 1
let absensisantri = ["hadir", "alpha", "hadir", "hadir", "izin"];
let rekap = {hadir: 0, alpha: 0, izin: 0};

for (let status of absensisantri ) { // for....of ambil nilai dari array, for ....in ambil index/key dari array
    rekap[status]++;
}
console.log(rekap);

// case 2
let mahasiswa = [
    {nama: "budi", umur: 20, ipk: 3.5},
    {nama: "andi", umur: 22, ipk: 3.8},
    {nama: "caca", umur: 21, ipk: 3.9},
];

mahasiswa.forEach(m => {
    console.log(`Nama: ${m.nama}, Umur: ${m.umur}, IPK: ${m.ipk}`);
});

// case 3
let tabunganMh ={ budi:50000, ani:20000};
tabunganMh.budi += 100000;
console.log(tabunganMh.budi);

// case 4
let nilai = [10, 20, 50, 30, 4];
let total = nilai.reduce((sum, n) => sum + n, 0); // menjumlahkan semua elemen array, dimulai dari 0
let rata = total / nilai.length;
console.log("rata-rata: " + rata);

// case 5
let gudang = [
    {nama: "buku", harga: 10000, stok: 10},
    {nama: "pensil", harga: 2000},
    {nama: "penghapus", harga: 1000},
];
gudang.find(b => b.nama === "buku").stok -= 10;// dipakai untuk mencari elemen dalam array yang memenuhi kondidi terterntu(callback=true// maka elemen dikembalikan)
console.log(gudang);