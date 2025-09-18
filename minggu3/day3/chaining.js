// chaining adalah teknik untuk menggabungkan beberapa operasi asynchronous yang bergantung satu sama lain
// setiap operasi akan menunggu operasi sebelumnya selesai sebelum dijalankan
// teknik ini sangat berguna untuk menghindari callback hell
const hitung = new Promise((resolve) => {
    setTimeout(() => resolve(5), 2000)
})

hitung
 .then(j => {
    console.log("langkah 1:", j)
    return j * 2
 })
 .then(j => {
    console.log("langkah 2:", j)
    return j + 10
 })
 .then(j => {
    console.log("langkah 3:", j)
    return j * 2
 })
 .then(j => {
    console.log("langkah 4", j)
 })
 .catch(e => console.log("error", e))
 .finally(() => console.log("berhasil hitung"))


 // contoh chaining
const hitung2 = (nilai) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(nilai * 2)
        }, 1000)
    })
}

hitung2(5)
    .then((result) => {
        console.log(result);
        return hitung(result);
    })
    .then((result) => {
        console.log(result);
        return hitung(result);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => console.log(error))
    .finally(() => console.log('selesai menunggu janji'));



