let datasiswa = [
    {nama: 'bambang', nilai: 90, jurusan: 'teknik informatika'},
    {nama: 'irgi', nilai: 80, jurusan: 'teknik informatika'},
    {nama: 'kahfi', nilai: 70, jurusan: 'IPA'},
]
console.log(datasiswa);
let maPel = datasiswa.filter((item)=> item.jurusan === 'IPA')
console.log(maPel)
let gabnil = datasiswa.filter((item)=> item.nilai > 80)
console.log(gabnil)
let rata2 = datasiswa.reduce((a,b)=> a + b.nilai, 0)
rata2 = rata2 / datasiswa.length
console.log(rata2)

// 
// ❖ Daftar barang yang total belanjanya (jumlah × harga) lebih dari 500
// ribu
// ❖ Total semua belanja
// ❖ Array baru yang berisi hanya nama barang dan total belanjanya saja

let transaksi = [
    {namaBarang: 'baju', harga: 10000, jumlah: 1},
    {namaBarang: 'celana', harga: 20000, jumlah: 2},
    {namaBarang: 'sepatu', harga: 30000, jumlah: 3},
    {namaBarang: 'topi', harga: 40000, jumlah: 4},
    {namaBarang: 'jaket', harga: 50000, jumlah: 5}
]
let belanja = transaksi.reduce((a,b)=> a + b.harga * b.jumlah, 0)
console.log(`${[transaksi[4].namaBarang]} + ${[transaksi[3].namaBarang]} = ${belanja}`)