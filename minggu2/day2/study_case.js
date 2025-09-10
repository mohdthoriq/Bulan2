// study case pendaftaran sekolah
let siswa = ['irgi','kahfi','farid','xena','gilang']
console.info('daftar siswa');
console.table(siswa)

function pendaftaran() {
        if (siswa.includes('bambang')) {// buiid 1
            console.log('sudah terdaftar');
        } else {
            console.warn('belum terdaftar');
            siswa.unshift('bambang') // build 2
            console.log(`menambahkan bambang`)
            console.table(siswa)
        }
        console.log(`batal untuk mendaftar: ${siswa.pop()}`); // build 3
        console.table(siswa)
        siswa.splice(2,0, 'gilang') // build 4
        console.log(siswa);
        
        let gelombang1 = siswa.slice(0,3) // build 5
        let gelombang2 = siswa.slice(3,6)

        console.log('gelombang 1');
        console.table(gelombang1)
        console.log('gelombang 2');
        console.table(gelombang2)

        console.log(`total angkatan baru ${siswa.length} siswa`)
        gelombang1.push(gelombang2)
        console.table([gelombang1])

 }
pendaftaran()