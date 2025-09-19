// // 1.
// function helloAsync() {
//     return new Promise((resolve) => {
//         resolve("hello dari async")
//     })
// }
// async function panggil() {
//     let hasil = await helloAsync()
//     console.log(hasil);
// }
// panggil()

// // 2.
// function ambilData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("data berhasil diambil")
//         }, 2000)
//     })
// }
// async function ambil() {
//     let hasil = await ambilData()
//     console.log(hasil);
// }
// ambil()

// // 3.
// function getNumber() {
//     return new Promise((resolve) => {
//         resolve(42)
//     }) 
// }
// async function tampil() {
//     let hasil = await getNumber()
//     console.log(hasil);
// }
// tampil()

// // 4.
// function tambahLima(x) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(x + 5)
//         }, 2000)
//     })
// }
// async function main() {
//     let hasil = await tambahLima(10)
//     console.log(hasil);
// }
// main()

// // 5.
// function throwError() {
//     return new Promise((resolve,reject) => {
//         reject(new Error("Terjadi Kesalahan"))
//     }, 1000)
// }
// async function tampilkan() {
//     try {
//         let hasil = await throwError()
//         console.log(hasil);
//     } catch (error) {
//         console.log("error", error.message);
//     }
// }
// tampilkan()

// // 6.
// fetch("https://equran.id/api/v2/surat/1")

// async function namalatin() {
//     let hasil = await fetch("https://equran.id/api/v2/surat/1")
//     console.log(hasil);
// }
// namalatin()

// // 7.
// async function namalatin() {
//     let response = await fetch("https://equran.id/api/v2/surat/1")
//     if (response.ok === false) {
//         try {
//             throw new Error("Gagal mengambil data")
//         } catch (error) {
//             console.log("error", error.message);
//         }
//     }
//     console.log(response);
// }
// namalatin()

// 8.
// async function namalatin() {
//     try {
//         let response = await fetch("https://equran.id/api/v2/surat/1")
//         if (response.ok === false) {
//             throw new Error("Gagal mengambil data")
//         }
//         let data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("error", error.message);
//     } finally {
//         console.log("proses selesai");
//     }
// }
// namalatin()

// // 9.
// async function tafsir() {
//     let data = await fetch("https://equran.id/api/v2/tafsir/112")
//     let tafsir = await data.json()
//     let list = tafsir.data
//     console.log(list);
// }
// tafsir()

// // 10.
// async function salah() {
//     try {
//         let data = await fetch("https://equran.id/api/v2/surattidakada")
//         if (data.ok === false) {
//             throw new Error("Gagal mengambil data")
//         }
//     } catch (error) {
//         console.log("error", error.message);
//     }
// }
// salah()

// // 11.
// async function tampilkan() {
//     try {
//         let hasil = await Promise.all([
//             fetch("https://equran.id/api/v2/surat/1"),
//             fetch("https://equran.id/api/v2/surat/112")
//         ]);

//         // Ubah hasil response ke bentuk JSON
//         let data = await Promise.all(hasil.map(r => r.json()));

//         // Tampilkan namaLatin kedua surat
//         console.log("Surat 1:", data[0].data.namaLatin);
//         console.log("Surat 112:", data[1].data.namaLatin);

//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }

// tampilkan();


// // 12.
// function detik1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("detik 1")
//         }, 1000)
//     })
// }
// function detik2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("detik 2")
//         }, 2000)
//     })
// }
// async function lomba() {
//     Promise.race([detik1(), detik2()])
//         .then((hasil => {
//             console.log(hasil);
//         }))
// }
// lomba()


// // 13.
// function janii1() {
//     return new Promise((resolve) => {
//         resolve("janii1")
//     })
// }
// function janii2() {
//     return new Promise((resolve) => {
//         resolve("janii2")
//     })
// }
// function janii3() {
//     return new Promise((resolve, reject) => {
//         reject("janii3")
//     })
// }
// async function coba() {
//     Promise.allSettled([janii1(), janii2(), janii3()])
//         .then((hasil) => {
//             console.log(hasil);
//         })
// }
// coba()

// // 14.
// async function dataAPI(surat) {
//     try {
//         let hasil = await Promise.all([
//             fetch(`https://equran.id/api/v2/surat/${surat}`),
//             fetch(`https://api.myquran.com/v2/husna/semua`),
//             fetch(`https://api.myquran.com/v2/hadits/arbain/semua`)
//         ]);

//         // pastikan semua response OK
//         hasil.forEach((r, i) => {
//             if (!r.ok) throw new Error(`API ke-${i + 1} gagal (${r.status})`);
//         });

//         let data = await Promise.all(hasil.map(r => r.json()));

//         console.log("Nama Surat:", data[0].data.namaLatin);
//         console.log("Jumlah Asmaul Husna:", data[1].data.length);
//         console.log("Jumlah Hadits Arbain:", data[2].data.length);

//     } catch (error) {
//         console.log("error:", error.message);
//     }
// }

// dataAPI(1);

// 15.
async function fetchsurat(id) {
    try {
        if (isNaN(id)) {
            throw new Error("ID harus berupa angka");
        }
        let response = await fetch(`https://equran.id/api/v2/surat/${id}`);
        if (response.ok === false) {
            throw new Error("Gagal mengambil data");
        }
        let data = await response.json();
        console.log("Nama Surat:", data.data.namaLatin);
        } catch (error) {
        console.log("error:", error.message);
    }
}

fetchsurat(6); // 
fetchsurat("a"); // eror id harus angka
