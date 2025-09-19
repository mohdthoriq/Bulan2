// // 1.
// function operasi() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let pesan = 'operasi berhasil'
//             resolve(pesan)
//         }, 2000)
//     })
// }

// operasi()
//     .then((pesan) => console.log(pesan))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('selesai setelah 2 detik'))


// // 2.
// function proses() {
//     return new Promise((resolve, reject) => {
//         const sukses = false
//         if (sukses === true) {
//             resolve("Data berhasil diproses")
//         } else {
//             reject("operasi gagal")
//         }
//     })
// }
// proses()
//     .then(sukses => console.log(sukses))
//     .catch(error => console.log(error))
//     .finally(()=> console.log("proses selesai"));


// // 3.
// Promise.resolve(5)
//     .then((i) => i * 2) // 5 * 2
//     .then((i) => i + 10) // 10 + 10
//     .then((i) => console.log(i * 2)); // 20 * 2


// // 4.
// fetch("https://equran.id/api/v2/surat/114")
//     .then(Response => Response.json())
//     .then(data => {
//         console.log(JSON.stringify(data, null, 2)); // format rapi
//     })
//     .catch(error => console.log(error))
//     .finally(() => console.log("proses selesai"));


// // 5.
// fetch("https://equran.id/api/v2/surat/99999")
//     .then(response => {
//         if (!response.ok) {
//             // console.log("API gagal diambil")
//             throw new Error("API gagal diambil")
//         }
//         return response.json()
//     })
// .then(data => {
//     console.log("API berhasil diambil")
//     console.log(data);
// })
// .catch(e => console.error("error:", e.message))



// // 6.
// fetch("https://equran.id/api/v2/surat/99999")
//     .then(response => {
//         if (!response.ok) {
//             // console.log("API gagal diambil")
//             throw new Error("API gagal diambil")
//         }
//         return response.json()
//     })
// .then(data => {
//     console.log("API berhasil diambil")
//     console.log(data);
// })
// .catch(e => console.error("error:", e.message))
// .finally(() => console.log("proses selesai, apapun hasilnya"));


// // 7.

// Promise.race([
//     fetch("https://api.myquran.com/v2/hadits/arbain/semua"),
//     fetch("https://api.myquran.com/v2/husna/semua")
// ])
//     .then(response => {
//         if(!response.ok) {
//             throw new Error("gagal ambil API tercepat")
//         }
//         return response.json()
//     })
//     .then(data => {
//         console.log("API tercepat berhasil diambil")
//         console.log(data)
//     })
//     .catch(error => console.error("Error: ", error.message))
//     .finally(() => console.log("proses selesai"));


// 8.
// Promise.allSettled([
//     fetch("https://api.myquran.com/v2/quran/surat/semua"),
//     fetch("https://api.myquran.com/v2/husna/semua"),
//     fetch("https://api.myquran.com/v2/hadits/arbain/semua")
// ])
//     .then(respones => {
//         respones.forEach((result, index) => {
//             if (result.status === 'fulfilled') {
//                 console.log(`API ${index + 1} berhasil diambil, status: ${result.status}}`)
//             } else {
//                 console.log(`API ${index + 1} gagal diambil`)
//             }
//         })
//     })

// // 9.

// Promise.all([
//     fetch("https://api.myquran.com/v2/quran/surat/semua"),
//     fetch("https://api.myquran.com/v2/husna/semua"),
//     fetch("https://api.myquran.com/v2/hadits/arbain/semua")
// ])
//     .then(respones => {
//         return Promise.all(respones.map(r=> r.json()))
//     })
//     .then(data => {
//         console.log("dashboard siap!");
//         console.log("surat: ", data[0]);
//         console.log("asmaulhusna: ", data[1]);
//         console.log("hadits arbain: ", data[2]);
//     })
//     .catch(error => {console.log("gagal memuat dashboard"),console.log(error)});


// 10.
const apikey = fetch("https://equran.id/api/v2/surat/1")//Memanggil API untuk mengambil data surat 1. fetch mengembalikan Promise.
    .then(response => {//Menangani response dari fetch
        if (!response.ok) throw new Error("API gagal diambil")//Jika HTTP status bukan 200–299, lempar error supaya Promise rejected.
        return response.json() // mengembalikan respon jadi json
    })
const time = new Promise((_,reject) => { //Membuat Promise baru yang hanya reject setelah delay tertentu. _ berarti kita tidak menggunakan resolve.
    setTimeout(() => { //Setelah 2 detik, Promise ini akan rejected dengan pesan error “timeout api terlalu lama”.
        reject(new Error("timeout api terlalu lama"));
    }, 5000) // 
})

Promise.race([apikey, time]) // melombakan time dan apikey
    .then(data => {
       console.log(JSON.stringify(data, null, 2));
         }) // format rapi   
    .catch(error => console.log(error.message))
    .finally(() => console.log("proses selesai"));