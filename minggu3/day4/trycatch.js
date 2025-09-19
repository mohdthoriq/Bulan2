function tambah(a, b) {
    return new Promise((resolve) => {
    setTimeout(() => {
            resolve(a + b)
    }, 2000)}
    )
}

async function hitung() {
    try {
        let hasil = await tambah(30, 40)
        console.log("hasilnya ", hasil)
    } catch(e) {
        console.error("eror", e)
    }
}
hitung()