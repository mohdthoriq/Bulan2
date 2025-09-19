function ambilUser() {
    return new Promise((resolve) =>{
        setTimeout(() => resolve("user berhasil di ambil"), 1001)
    })
}
function ambilPoduk() {
    return new Promise((resolve) =>{
        setTimeout(() => resolve("Produk berhasil di ambil"), 1001)
    })
}

async function jalankan() {
    let balap = await Promise.race([ambilUser(), ambilPoduk()])
    console.log("pemenangnya", balap)
}

jalankan()