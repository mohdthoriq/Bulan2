// sebuah array dia di akses menggunkan index numberik tapi dia juga bisa dengan sebuah property 
let con = ['irgi', 'kahfi'] // ini kita akses menggunakan index (0 - n)
let con2 = [] // ini akan diakses menggunakan propertynya 
con2['tes'] = 'value'
con2['tes2'] = 'value'

// klo mau push
con2.push({ ['tes3']: 'value3' }); // untuk key nya dibungkus dengan kurung object dan kurung siku untuk deklarai key nya
console.table(con2);

// klo mau digabung 
let gabung = [...con, ...con2]// yang hanya keluar cuma value 3 sebab dihitung index nya cuma nmberik {tes 3}, sedangkan tes,tes2 itu mengganti index numberik menjadi nama
console.table(gabung);

// let perpus = {};
let perpus = [];
// let listPengunjung = {};
let listPengunjung = [];
let infoData = []


// const manageData = {
//     perpus: function (key, value) {
//         // perpus[key] = value;
//         perpus.push({[key]: value});
//     },
//     pengunjung:
//         function (key, value) {
//             // listPengunjung[key] = value;
//                listPengunjung.push({[key]: value});
//         },
//     infoData: function () {
//         // let info = {...listPengunjung,...perpus};
//         return [[...perpus], [...listPengunjung]];
//     }
// }

// manageData.pengunjung("Nama", "Bambang Pengunjung");
// manageData.pengunjung("Alamat", "Bekasi");
// manageData.pengunjung("Phone", "089502433722");

// manageData.perpus("Nama", "Bambang Perpus");
// manageData.perpus("Alamat", "Bekasi");
// manageData.perpus("Phone", "089502433722");

// let data1 = [];
// data1["d1"] = "ISI";
// data1["d2"] = "ISI 2";

// let data2 = ["data3",...data1];

// // let data4 = [...data1,...data2];

// // console.log(data1.length);


// console.table(perpus);
// console.table(listPengunjung);



// this. // itu untuk menggantikan mengakses object itu bukan array, khusus untuk object
let mobil = {
    merk: {
        honda: "honda",
        toyota: "toyota",
        suzuki: "suzuki"
    },
    warna: {
        merah: "merah",
        biru: "biru",
        hijau: "hijau"
    }
}
// contoh mau akses mobil merk honda
console.log(mobil.merk.honda); // outputnya akan honda
// nah asal kan kita masih dalam block scoope mobil maka klo kita mau akses property dalam mobil tinggal gunakan (this.property) ini rumusnya
// contoh 
let motor = {
    merk: {
        honda: "honda",
        toyota: "toyota",
        suzuki: "suzuki"
    },
    warna: {
        merah: "merah",
        biru: "biru",
        hijau: function tes() {
            console.log(this.merk.honda);
        }
    }
}
tes();







// const manageData = {
//     dataPengunjung: [],

//     dataPerpus: [],

//     add: function (key, value, type) {
//         if (!data || !['pengunjung', 'perpustakaan'].includes(type)) {
//             console.error('Masukan Data Nya kemana ?');
//         }
//         else if (data == "perpus") {
//             this.dataPerpus.push({ [key]: value });
//         } else if (data == "pengunjung") {
//             this.dataPengunjung.push({ [key]: value });
//         } else {
//             console.error('Data nya ngk ada?');
//         }
//     },
//     infoData: function () {
//         return [[...this.dataPengunjung], [...this.dataPerpus]];
//     },

//     delete: function () { },

//     infoData: function (data) {
//         if (!data) {
//             console.error('Masukan Data Nya kemana ?');
//         } else if (data == "1") {
//             return [[...this.dataPengunjung_1]];
//         } else if (data == "2") {
//             return [[...this.dataPerpus_2]];
//         } else if (data == "all") {
//             return [[...this.dataPengunjung_1], [...this.dataPerpus_2]];
//         }
//     }
// }



// manageData.add("Nama", "Bambang Pengunjung", "pengunjung");
// manageData.add("Alamat", "Bekasi", "pengunjung");
// manageData.add("Phone", "089502433722", "pengunjung");

// manageData.add("Nama", "Bambang perpus", "perpus");
// manageData.add("Alamat", "Bekasi", "perpus");
// manageData.add("Phone", "089502433722", "perpus");

// console.log(manageData.infoData());


// SPREAD
// spread (....variabel) memecahkan / menyebarkann element dalam array dari yang iterable(iterasi / sesuatu yang bisa ditambah atau dikurang) menjadi individual element atau dikeluarkan dari array
// REST
// rest (...variabel)mengumpulkan sisa nilai kedalam array atau object