function login(username, callback) {
    setTimeout(() => {
    console.log(`login sebagai user: ${username}`);
    callback(username)
},1000)
}
function AmbilData(user, callback) {
    setTimeout(()=> {
        console.log(`data user diambil`);
        callback({id:1,nama:user})
    },1000)
}
function tampilkanData(data, callback) {
    setTimeout(() => {
        console.log(`tampilkan data user ${data}`);
        callback(data)
    },1000)
}
function simpanData(data, callback) {
    setTimeout(() => {
        console.log(`simpan data user ${data.nama}`);
        callback(data)
    },1000)
}
login("andi", function(user) {
    AmbilData(user, function(data) {
        tampilkanData(data, function(hasil) {
            simpanData(hasil, () => {
                console.log("selesai")
            })
        })
    })
})


// promise
function login(username) {
    return new Promise((resolve) => {
    setTimeout(() => {
    console.log(`login sebagai user: ${username}`);
    resolve(username)
},1000)
})
}
function AmbilData(user) {
    return new Promise((resolve) => {
    setTimeout(()=> {
        console.log(`data user diambil`);
        resolve({id:1,nama:user})
    },1000)
})
}
function tampilkanData(data) {
    return new Promise((resolve) => {
    setTimeout(() => {
        console.log(`tampilkan data user ${data}`);
        resolve(data)
    },1000)
})
}
function simpanData(data) {
    return new Promise((resolve) => {
    setTimeout(() => {
        console.log(`simpan data user ${data.nama}`);
        resolve(data)
    },1000)
})
}
login("andi")
    .then((user) => {
        return AmbilData(user)
    })
    .then((data) => {
        return tampilkanData(data)
    })
    .then((hasil) => {
        return simpanData(hasil)
    })
    .then(() => {
        console.log("selesai")
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log("selesai")
    })
