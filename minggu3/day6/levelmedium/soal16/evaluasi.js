
function getProduk(stok) {
    return new Promise((resolve, reject) => {
        if (stok > 0) {
            resolve("Produk tersedia")
        } else {
            reject("Produk habis")
        }
})
}
getProduk()
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
    .finally(() => console.log("selesai"))
//
