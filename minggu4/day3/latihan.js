// menyimpan
localStorage.setItem('nama', 'budi')
localStorage.setItem('umur', 20)

// mengambil
localStorage.getItem('nama')
localStorage.getItem('umur')

// menghapus
localStorage.removeItem('nama')

// menghapus semua
localStorage.clear()

// Simpan array
let fruits = ["apel", "mangga", "pisang"];
localStorage.setItem("buah", JSON.stringify(fruits));

// Ambil array
let data = JSON.parse(localStorage.getItem("buah"));
console.log(data[0]); // apel