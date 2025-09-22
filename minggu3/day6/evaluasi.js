// 1.
let barang = [
    {nama: "buku", harga: 10000}
]
let code = JSON.stringify(barang)
console.log(code)
// 2.
function hitungLuas(panjang, lebar, callback) {
    let Luas = panjang * lebar
    callback(Luas)
}
function tampil(Luas) {
    console.log(`total luas : ${Luas}`)
}
hitungLuas(5, 10, tampil)
// 3.
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('selesai mengambil data'));

// 4.
let data = `{"nama":"Andi","umur":20}`
let user = JSON.parse(data)
console.log(user.nama)
// 5.
function sayHello(nama, callback) {
    setTimeout(() => {
        callback(`hello ${nama}`)
    }, 2000)
}
function sambut(pesan) {
    console.log(pesan)
}
sayHello("andi", sambut)
// 6.
// let judul = document.getElementById('judul')
// judul.innerText = "Belajar DOM selection"
// 7.
function janji() {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve("Data berhasil diambil")
        }, 3000)
})
}
janji()
    .then((data) => console.log('ini', data))
    .catch((error) => console.error(error.message))
    .finally(() => console.log("selesai"))
// 8.
function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "andi" && password === "123") {
                resolve("login berhasil")
            } else {
                reject("login gagal")
            }
        })
        })
}
function ambilData(userid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userid === 1) {
                resolve("data berhasil diambil")
            } else {
                reject("data gagal diambil")
            }
        })
    })
}
function tampilData(data) {
    console.log(data)
}
loginUser("andi", "123")
    .then((data) => {
        console.log(data)
        return ambilData(1)
    })
    .then(user => {
        console.log(user)
        return tampilData(`${data} dari user ${user}`)
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("selesai"))
//  9.
// let soal9 = document.getElementById('soal9')
// let p = soal9.querySelectorAll('.teks')
// p.forEach((p, i) => {
//     p.innerText = `paragraf ke - ${i + 1}`
//     p.style.color = "blue"
// })
// 10.
function bagi(a, b) {
    return new Promise((resolve, reject) => {
    if (b === 0) {
        reject("tidak bisa dibagi dengan nol")
    } else {
        resolve(a / b)
    }
})
}
async function hitung() {
    try {
        let hasil = await bagi(10, 0)
        console.log(`hasilnya adalah ${hasil}`)
    } catch (error) {
        console.log('terjadi kesalahan :', error)
    } finally {
        console.log("selesai")
    }   
}
hitung()

// 11.
