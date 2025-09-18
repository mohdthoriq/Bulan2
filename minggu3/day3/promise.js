// promise adalah sebuah objek yang merepresentasikan keberhasilan atau kegagalan sebuah operasi asynchronous di masa depan
// contoh misalnya pakai async
const ambilData = new Promise((resolve, reject) => {
    setTimeout(() => {
      let sukses = true;
  
      if (sukses) {
        resolve("Data berhasil diambil!");
      } else {
        reject("Gagal ambil data!");
      }
    }, 2000);
  });
  
  ambilData
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log("Proses selesai"));


    // promise dan chaining
const janji = new Promise((resolve, reject) => {
    const kondisi = true;

    if (kondisi) {
        resolve('janji terpenuhi');
    } else {
        reject('janji tidak terpenuhi');
    }
});

janji
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log('selesai menunggu janji'));

// promise allsettled
const lap1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('API 1 berhasil'), 2000);
});

const lap2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('API 2 gagal'), 1000);
});

const lap3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('API 3 berhasil'), 3000);
});

// Promise.allSettled([lap1, lap2, lap3])
//     .then(result => {
//         result.forEach((result, index) => {
//             if (result.status === 'fulfilled') {
//                 console.log(`API ${index + 1} berhasil. Hasil: ${result.value}`);
//             } else {
//                 console.log(`API ${index + 1} gagal. Error: ${result.reason}`);
                
//             }
//         })
//     })


const surat = fetch("https://api.myquran.com/v2/quran/surat/semua")
const asmaulhusna = fetch ("https://api.myquran.com/v2/husna/semua")
const arbain = fetch ("https://api.myquran.com/v2/hadits/arbain/semua")

// promise all
Promise.all([surat, asmaulhusna, arbain])
 .then(responses => Promise.all(responses.map(r => r.json())))
 .then(data => {
    console.log("semua berhasil di ambil")
    console.dir(data, {depth: null})
 })
 .catch(e => {
    console.log("ada api yang gagal di ambil", e)
 })



//  const surat = fetch("https://api.myquran.com/v2/quran/surat/semua")
// const asmaulhusna = fetch ("https://api.myquran.com/v2/husna/semua")
// const arbain = fetch ("https://api.myquran.com/v2/hadits/arbain/semua")

// // promise all (kalo satu gagal gagal semua)
// Promise.all([surat, asmaulhusna, arbain])
//  .then(responses => Promise.all(responses.map(r => r.json())))
//  .then(data => {
//     console.log("semua berhasil di ambil")
//     console.dir(data, {depth: null})
//  })
//  .catch(e => {
//     console.log("ada api yang gagal di ambil", e)
//  })

//promise allsetled(nunggu semua selesai baru kasih laporan)
Promise.allSettled([surat, asmaulhusna, arbain])
 .then(result => {
  result.forEach((result, index) => {
      if(result.status === 'fulfilled') {
         console.log(`API ${index + 1} sukses`, result.value) 
      } else {
         console.log(`API ${index + 1} gagal`, result.reason)
      }
   });
})

//promise race gunanya untuk mengambil api tercepat
Promise.race([surat, asmaulhusna, arbain])
 .then(response => response.json())
 .then(data => {
   console.log("api yang paling cepat", data)
 })
 .catch(e => {
   console.log("response gagal", e)
})