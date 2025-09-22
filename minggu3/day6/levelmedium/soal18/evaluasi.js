function connectdata() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("connect data success")
        },1000)
})
}
function AmbilProduct() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Ambil Product Success")
        },1000)
    })
}
function  tampilkanData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("tampilkan data success")
        },1000)
    })

}
connectdata()
    .then((n)=> {
        console.log(n)
        return AmbilProduct()
    })
    .then((n) => {
        console.log(n)
        return tampilkanData()
    })
    .then((n) => {
        console.log(n)
    })
    .catch(err => console.log(err))
    .finally(() => console.log("selesai"))