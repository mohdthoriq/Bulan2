// let nama = "budi"
// nama = "halo " + nama
// console.log(nama);


// let nama = "budi"
// let nama2;
// let te = "empthy"
// console.log(nama2 ?? te); 

// function sapa(nama) {
//     return 'halo ' + (nama ?? 'tamu');
// }
// console.log(sapa('budi'));



// function mainanFavorit(mainan) {
//     return "ini mainan kamu adalah " + (mainan ?? "Robot");
// }
// console.log(mainanFavorit());



let harga = 0;
let ulang = true;
function pesanMenu() {
    do { 
        let pesanan = prompt("Pilih angka menu yang ingin Anda pesan: \n1. Mie Ayam : Rp. 15.000\n2. Bakso : Rp. 10.000\n3. Seblak : Rp. 12.000\n4. Ikan Bakar : Rp. 18.000")
    switch (pesanan) {
        case "1":
            document.getElementById('tag1').innerHTML = "Mie Ayam : Rp. 15.000";
            harga += 15000;
            break;
        case "2":
            document.getElementById('tag2').innerHTML = "Bakso : Rp. 10.000";
            harga += 10000;
            break;
        case "3":
            document.getElementById('tag3').innerHTML = "Seblak : Rp. 12.000";
            harga  += 12000;
            break;
        case "4":
            document.getElementById('tag4').innerHTML = "Ikan Bakar : Rp. 18.000";
            harga += 18000;
            break;
        default:
            document.getElementById('tag5').innerHTML = "Anda tidak memesan apa-apa";
    }
    ulang = confirm("Apakah anda ingin memesan lagi?");
    } while (ulang);
    document.getElementById('tag6').innerHTML = "Total Harga : Rp. " + harga;
    return harga;
}

let dataSantri = [
    "bambang",
    "budi",
    "caca",
    "dodi",
    "euis",
    "febri",
    "gusti",
    "hani",
    "indri",
    "joko",
    "karti",
    "lala",
    "mama",
    "nana",
    "ocha",
    "pipi",
    "qori",
    "rani",
    "siti",
    "tata",
    "uusi",
    "vivi",
    "wati",
    "xeni",
    "yuni",
    "zaki",
]

// let end = dataSantri.length


// for (let start = 0; start <= dataSantri.length; start++) {
//     console.log((start + 1)  + ". " + dataSantri[start]);
    
// }

// for(let i = 5; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }
// for(let f = 1; f <= 5; f++) {
//     let tel = "";
//     for (let j = 1; j >= f; j++) {
//         tel += "#";
//     }
//     console.log(tel);
// }


// while 
// let angka = 1;
// while (angka <= 5) {
//     console.log(angka);
//     angka++;
// }

// // for 
// for (let i = 1; i <= 5; i++) {
//     console.log("hari ke " + i);
// }

// angka = 5;
// while (angka >= 1) {
//     console.log(angka);
//     angka--;
// }


let tinggi = 5;
for (let i = 1; i <= tinggi; i++) {
    let row = "";
    for (let j = 1; j <= tinggi - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += i;
    }
    console.log(row);
}
// for (let i = 1; i <= 12; i++) {
//     let row = "*"
//     row += "*"
//     console.log(row)
// }
for (let l = tinggi; l >= 1; l--) {
        let row = "";
    for (let m = 1; m <= tinggi - l; m++) {
        row += " ";
    }
    for (let n = 1; n <= 2 * l - 1; n++) {
        row += "*";
}
    console.log(row);
}
