function getUser () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("tes")
        }, 5000)
    })
}
async function nama() {
    const user = await getUser()
    console.log("user", user);   
}
nama()
// async/await
function tambah(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a * b)
        }, 2000)
    })
}
async function hitung() {
    let hasil = await tambah(30, 40)
    console.log(`hasilnya adalah ${hasil}`);
}
hitung()

// 
function tes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("tes")
        }, 2000)
    })
}
async function name() {
    try {
        const user = await tes()
        console.log(user);
    } catch (error) {
        console.log(`error ${error}`);
    } finally {
        console.log("selesai");
    }
}
name()