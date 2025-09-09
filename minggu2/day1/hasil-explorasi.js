// soal 1
let teman = ["irgi","kahfi","zidan","harits","rizki"];
console.log(`${teman[0]} & ${teman[4]}`);
console.log(teman.length);

// soal 2
let hobi = [];
hobi.push("berkuda");
hobi.push("membaca");
hobi.push("berenang");
console.log(hobi);

// soal 3
let MaPel = ['MTK','B.inggris','IPA','IPS'];
MaPel.pop(); // hapus paling akhir
console.log(MaPel);

// soal 4
let angka = [1,2,3,4,5];
for (let i = 0; i < angka.length; i++){
    console.log(`${angka[i]}`);
}

// soal 5
let kota = ['bogor','jakarta','bandung','surabaya'];
for (let i = 0; i < kota.length; i++){
    if (kota[i] == 'bogor'){
        console.log(`kota bogor ada di index ke ${i}`);
        break;
    } else {
        console.log(`kota bogor tidak ada`);
        
    }
}

// soal 6
let film = ['batman','avangers','mission impossible','spiderman']
console.log(film)
film[1] = 'nezha'
console.log(film);

// soal 7
let olahraga = ['gym','sepeda','berenang'];
olahraga.unshift('berkuda')
console.log(olahraga);

// soal 8
let bulan = ['januari','februari','maret','april','mei']
bulan.shift()
console.log(bulan);


// soal 9
let MakBer = ['nasi goreng','mie goreng','nasi uduk']
let MakRin = ['roti','kue','susu']
let Makanan = MakBer.concat(MakRin)
console.log(Makanan);

// soal 10
let huruf = ['a','b','c','d','e']
console.log(huruf)
huruf.reverse()
console.log(huruf);

// soal 11
let NamCak = ['Nezha','Budi','Zoro','Dedi','Euis','Fifi']
console.log(NamCak)
NamCak.sort()
console.log(NamCak);

// soal 12
let mapel = ['MTK','B.inggris','IPA','IPS']
function Pelajaran(array) {
    if (Array.isArray(mapel)) {
        mapel.includes('IPA')
        console.log(mapel.includes('IPA'));
    } else {
        console.log('bukan array');
    }
}
Pelajaran(mapel);


// soal 13
let hari = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu']
let kerja = hari.slice(0,4)
console.log(kerja);

// soal 14
let negara = ['indonesia','malaysia','singapura','thailand','jepang']
for (let i = 0; i < negara.length; i++){
    console.log(`Negara ke-${i+1}: ${negara[i]}`);
}


// soal 15
let kuadrat = angka.map(function(num) {
    return num * num;
});
console.log(kuadrat)


// soal 16
let ujian = []
for (let i = 1; i <= 100; i++){
    ujian.push(i)
}
console.log(ujian);
let lulus = ujian.filter(function(skor) {
    return skor >= 70;
});
console.log(lulus);

// soal 17
let belanja = [10000,15000,8000,12000,13000]
let total = belanja.reduce(function(sum, harga) {
    return sum + harga;
}, 0);
console.log(`total belanja ${total}`);


// soal 18
let cari = teman.find(function(item) {
    return item.startsWith('z');
});
console.log(cari);

// soal 19
let tinggi = [170, 180, 176];
let adatinggi = tinggi.some(function(skor) {
    return skor >= 170;
});
let semuatinggi = tinggi.every(function(skor) {
    return skor >= 150;
});
console.log(adatinggi);
console.log(semuatinggi);

// soal 20
angka.push(6, 7, 8, 9, 10)
let hasil = angka 
    .filter(function(num) {return num % 2 === 0})
    .map(function(num) {return num * 2})
    .reduce(function(sum, num) {return sum + num})
console.log(hasil); // 60 (2*2 + 4*2 + 6*2 + 8*2 + 10*2)
