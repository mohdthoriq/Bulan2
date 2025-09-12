const menuMakanan = {
    data: [], // untuk menyimpan objek makanan
    nextId: 1, // ini adlah id/kode unik untuk setiap pemanggilan
    tambahBanyak: function (...makanan) { // rest ...makanan untuk mengumpulkan semua argumen menjadi sebuah array
        console.log(`Akan menambah ${makanan.length} makanan:`); // menampilkan jumlah makanan yang akan ditambahkan
        makanan.forEach(item => { // untuk melakukan iterasi setiap elemen dalam array makanan
            if (item) {
                const makananBaru = {
                    id: this.nextId++, // id di beri nilai 1, dan akan bertambah terus(increment) setiap kali dipanggil
                    nama: item.nama, // untuk nama dan harga diambil dari objek item
                    harga: item.harga,
                    tersedia: true
                }
                this.data.push(makananBaru) // memasukkan mekananBaru denagn push ke array data
                console.log(`✅ "${item.nama}" ditambahkan ke menu!`);
            }
        });
    },
    lihat: function () {
        console.log("\n🍽️ === MENU MAKANAN ==="); // menampilkan menu saat ini
        if (this.data.length === 0) { // klo data makanan 0/kosong 
         console.log("Tidak ada makanan.");
         return;
        }
        this.data.forEach((item, index) => { // jika ada data maka akan ditampilakn item nya dengan format 
            const { id, nama, harga, tersedia } = item; // destructuring
            const status = tersedia ? "✅ Tersedia" : "❌ Habis"; // menggunakan ternary operator
            console.log(`${index + 1}. [ID ${id}] ${nama} - Rp ${harga}. ${status}`);
        });
    },
    editHarga: function (updateData) {
        const index = this.data.findIndex(item => item.id === updateData.id); // index = id // mencari index data yang cocok dengan id
        if (index === -1) { 
            console.log(`❌ Harga menu ID ${updateData.id} tidak ditemukan!`);
        } 
        this.data[index] = { // jika data ditemui maka update harga
            ...this.data[index],
            harga: updateData.harga
        }
        console.log(`✅ Harga menu ID ${updateData.id} berhasil diupdate!`);

    },
    hapusBanyak: function (...ids) {// pake rest untuk menampung banyak id
        ids.forEach(id => { // iterasi id 
            const index = this.data.findIndex(item => item.id === id);// mencari index yang cocok sesuai dengan yang ada di ids[]
            if (index !== -1) {// jika index id tidak ditemukan maka
                const { nama } = this.data[index];
                this.data.splice(index, 1); // hapus id tersebut
                console.log(`✅ "${nama}" dihapus!`); // tampilan pesan konfirmasi
            }
        });
    },
    salinMenu: function (...pilihId) {
        if (pilihId.length === 0) { // jika tidak ada argumen maka balikkan seluruh data 
            return [...this.data]; // menggunakan spread
        }
        const dipilih = this.data.filter(item => pilihId.includes(item.id)); // jika ada argumen pilih maka difilter data yang memiliki id menggunakan filter dan includes
        return [...dipilih]; // kembalikan array hasil filter
    }

}

// testing
console.log("🚀 TESTING MENU MAKANAN");
menuMakanan.tambahBanyak(
    { nama: "Nasi Goreng", harga: 25000 },
    { nama: "Mie Ayam", harga: 20000 },
    { nama: "Es Teh", harga: 5000 },
    { nama: "Ayam Bakar", harga: 35000 }
);
menuMakanan.lihat();
console.log('\n');

menuMakanan.editHarga({ id: 1, harga: 28000 });
menuMakanan.editHarga({ id: 3, harga: 6000 });
menuMakanan.hapusBanyak(2, 4);
menuMakanan.lihat();
console.log('\n');
const menuBackup = menuMakanan.salinMenu();
const menuPilihan = menuMakanan.salinMenu(1, 3);
console.log("Backup semua menu:", menuBackup);
console.log("Menu pilihan:", menuPilihan);
// output'