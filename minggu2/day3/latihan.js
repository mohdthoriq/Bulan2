// mengenali index,proprty,key,value,Element

// object = key:value
// array = index,value

// mengenali perbedaan array dan object

// deklarasi sebuah object
// object // rumus
let obj = {
    'key': "value",
    'key2': "value2",
}
console.log(obj.key);// cara mengakses object nama var.key

// mau ngecek type data 
(typeof obj.key); // contoh

// mengubah element value array
// arr[index] = "value";
// console.log(arr);


// menambahkan/mengubah properti/value pada object
obj.key2 = "value3";
console.log(obj);

// menghapus properti/value pada object
delete obj.key2['value2'];// hanya untuk menghapus isi property/ value dari property tersebut
console.log(obj);

// Add property dalam object
obj['key3'] = "value4";
console.log(obj);

// nested object
let obj1 = { // mendeklarasi object
    mobil: {
        merkban: {
            ban: "Bridgeston",
            ban1: "swallow"
        },
        merkknalpot: {
            merk: "Mbeer",
            merk1: "??"
        },
    }
}
console.log(obj1.mobil.merkban.ban); // cara mengakses object
obj1.mobil.merkban.ban = 'edit bridgeston'
obj1['mobil']['merkban']['ban'] = 'edit brid lagi'
console.table(obj1)



// object dalam object = nested object
// data
let contoh = {
    datasantri: {
        santri: {
            nama: "irgi",
            umur: 19,
            alamat: 'banyuwangi',
            wa: '09708783420',
            email: 'irgi24@gmail.com'
        },
        santri2: {
            nama: 'kahfi',
            umur: 19,
            alamat: 'bogor',
            wa: '08192873747',
            email: 'kahfi24@gmail.com',
            isActive: true
        },
        santri3: {
            nama: 'xena',
            umur: 20,
            alamat: 'jakarta',
            wa: '08298393790',
            email: 'xena24@gmail.com'
        }
    },
    dataProperty: {
        lt2: {
            kelasA: 'programmer',
            kantor: 'utama',
            device: {
                laptop1: 'laptop si A',
                laptop2: 'laptop si B',
                laptop3: 'laptop si C',
            }
        },
        lt3: {
            kelasB: 'programmer2',
            kelasA: 'Bisnis digital',
            kelasB2: 'Bisnis digital2',
            kantor: 'utama',
        }
    }
}
console.table(contoh.datasantri.santri)
console.log(contoh.datasantri);
console.log(contoh.dataProperty);

console.table(contoh.dataProperty)
console.table(contoh.datasantri)



// loop dengan object
// for in
for (let a in contoh) {
    console.log(`ini adalah A sebagai key dari ${a} ini adalah value dari ${contoh[a]}\n`);
}


// contoh loop nested
for (let a in contoh) { // a(key contoh) didalam dekalarasi contoh
    
    if (typeof contoh[a] == 'object') { // klo contoh [a] itu adalah object

        for (let b in contoh[a]) { // b(key dari property contoh)
            console.log(`ini adalah B sebagai key dari ${b}
             ini adalah value dari ${b} ==>  ${contoh[a][b]}\n`);

            if (typeof contoh[a][b] == 'object') { // klo contoh [a][b](property contoh dan key a) itu adalah object


                for (let c in contoh[a][b]) { // c(key dari key b)
                    console.log(`ini adalah C sebagai key dari ${c}
                 ini adalah value dari ${c} ==>  ${contoh[a][b][c]}\n`);

                    if (typeof contoh[a][b][c] == 'object') {

                        for (let d in contoh[a][b][c]) {
                            console.log(`ini adalah D sebagai key dari ${d}
                        ini adalah value dari ${d} ==>  ${contoh[a][b][c][d]}\n`);
                        }

                    } else {
                        console.log(`ini adalah ${c} ini adalah value dari ${contoh[a][b][c]}\n`);
                    }

                }

            } else {
                console.log(`ini adalah ${b} ini adalah value dari ${contoh[a][b]}\n`);
            }

        }

    } else {
        console.log(`ini ${a} ini adalah value dari ${contoh[a]}\n`)
    }
}
