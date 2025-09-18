// 1. buat promise untuk mensimulasi kan data user
function ambilDataUser(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = 'user123';
            if (username === user) {
                resolve(`user ditemukan: ${user}`);
            } else {
                reject('user tidak ditemukan');
            }
        }, 2000);
    })
}

ambilDataUser('admin')
    .then((pesan) => console.log(pesan))
    .catch((error)=> console.log(error))
    .finally(() => console.log('selesai login'));


// 2. buat proses chaining
function prosesLogin(usernama) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {id: 1, nama: 'user123'};
            resolve(user);
        },1000);
    })
}
function sambutanUser(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const pesanSambutan = `${user.nama}, selamat datang di aplikasi kami`;
            resolve(pesanSambutan);
        }, 1000);
    })
}

prosesLogin('user123')
    .then((user) => {
        console.log(user);
        return sambutanUser(user);  
    })
    .then((pesan) => {
        console.log(pesan);
    })
    .catch((error) => console.log(error))
    .finally(() => console.log('anda sudah selesai'));


// promise reject 
function ProsesLogIn(usernama) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const user = {id: 1, nama: 'user324'}
            if (usernama === user.nama) {
                resolve(`user ditemukan: ${user.nama}`)
            } else {
                reject('user tidak ditemukan')
            }
        }, 1000)
    })
}

