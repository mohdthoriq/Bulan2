const nilaiKelas = [
    { nama: "kahfi", IPA:80, mtk: 88, indonesia: 92 },
    { nama: "irgi", IPA: 75, mtk: 82, indonesia: 86 },
    { nama: "farid", IPA:90, mtk: 91, indonesia: 89 }
];

let nilaiAkhir = nilaiKelas.map((item)=> { 
    let Akhir = item.reduce((a,b)=> a + b, 0) / item.IPA * 0.3 + item.mtk * 0.3 + item.uas * 0.4
    return `${item.nama}: ${Akhir.toFixed(1)}`
    
})
console.log(nilaiAkhir);

let lulus = nilaiAkhir.filter((item)=> {
    if (nilaiAkhir  >= 80){
        return `${item} (Lulus)`
    }else{
        return `${item} (Tidak Lulus)`
    }
})
console.log(lulus);


let terbaik = nilaiAkhir.reduce((a,b)=> {
    return a.nilai > b.nilai ? a : b;
}, 0)
console.log(`${terbaik} (nilai akhir tertinggi)`);