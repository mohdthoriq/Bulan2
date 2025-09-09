// let mobil = [
//     'avanza',
//     'crv',
//     'fortuner',
//     'brio'
// ]
// console.log(mobil);
// for (let i = 0; i < mobil.length; i++) { // mobil.length adalah sesuai jumlah dalam array mobil
//     console.log(mobil[i]);
// }
// for (let i = 0; i < mobil.length; i++){
//     if (mobil[i] == 'crv') {
//         console.log(`crv ada di index ke ${i}`);
//     }
// }
// console.log(mobil.indexOf('fortuner')); // untuk melihat no gerbong index
// console.log(mobil.includes('fortuner')); // untuk melihat apakah di array mobil ada 'fortuner'
// for (let i = 0; i < mobil.length; i++) {
//     if (mobil[i] == 'fortuner') {
//         console.log(`fortuner ada di index ke ${i}`);
//         break; // untuk menghentikan looping                                                // antara 2 langsung kita berhentikan atau
//         i += mobil.length; //  memanipilasi i menjadi false supaya tidak lanjut looping     // kita manipulasikan i nya
//     } else {
//         console.log('fortuner tidak ada'); 
//     }
// }

// array di dalam array
// let A = 'apel'
// let buah = [
//     'semangka',
//     'anggur',
//     'mangga',
//     ['jeruk','manggis',['durian']],
//      A
// ]
// // console.log(buah[3][2][0]); // cara ngambil yang value array yang berada di dalam array // array tersebut ada di indexx ke berapa[] dan value tersebut ada di index ke berapa[].

// function renderArray(array) {
//     let hasil = '';// supaya bisa diakses sama semua scoope didalam functuion ini
//     let hasil2 = []; 
//      if (Array.isArray(buah)) { // jika buah adalah array = true 
//          for (let start = 0; start < array.length; start++) {
//             // hasil += `${buah[start]}\n` // hasil = hasil + buah[0,1,2,3,4]
//             hasil2.push(buah[start]); // memasukkan sebuah value kedalam array hasil2
//          }
//     }
//     return hasil2;// output nya hasil
// }
// console.table([renderArray(buah)]);

// function renderArray3(array) {
//     let hasil = '';// supaya bisa diakses sama semua scoope didalam functuion ini
//     let hasil2 = []; // sebuah wadah kosong untuk menyimpan hasil [array[2][3]];
//      if (Array.isArray(buah)) { // jika buah adalah array = true 
//          for (let start = 0; start < array.length; start++) { // karena array jadi dibuat array
//             if (Array.isArray(buah[start])) { // jika didalam array tersebut ada array2 
//                 for (let start2 = 0; start2 < buah[start].length; start2++) { // karena ada array2 maka diloop/dicek data array2
//                     if (Array.isArray(buah[start][start2])) { // jika didalam array2 ada array3
//                         for (let start3 = 0; start3 < buah[start][start2].length; start3++) { // karena ada array3 maka diloop/dicek data array3
//                             hasil2.push(buah[start][start2][start3]);// data array2 dan array3 dimasukkan ke dalam array
//                         } // array3
//                     } else { // jika tidak ada array3 maka data buah dimasukkan ke array 
//                         hasil2.push(buah[start][start2]);
//                     }
//                 } // array2
//             } else { // jika tidak ada array2 maka data buah dimasukkan ke array 
//                 hasil2.push(buah[start]);
//             }
        
//          } // array
//     } else { // jika bukan array maka jalankan ini
//         return 'bukan array';
//     }
//     return hasil2;// output nya hasil2 (hasil2 adalah sebuah array yang tadi sudah diisi oleh [array[2][3]])
// }
// console.table(renderArray3(buah));

// contoh array dan for
// const products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headset", "Webcam"];
// console.table(products);
// console.log(products[0]); // Output: Laptop
// console.log(products.length); // Output: 3

// for (let i = 0; i < products.length; i++) { // start/mulai dari 0; kondisi 0 lebih kecil (???); jika true maka (increment/decrement(++/--))
//     console.log(`${i + 1}. ${products[i]}`); // aksi yang mau dijalankan ketik true
// }

// Example case 2 
// let fibonance = [0, 1];
// for (let i = 0; i < 10; i++) { // start = 0; 0 lebih kecil dari 10; akan ditambah 1
//     fibonance.push(fibonance[i + 1] + fibonance[i]); // masukkan (i[1] + 1) + (i) kedalam array fibonance
//     console.table([fibonance]);

// }




// pop // untuk menghapus baris terakhir didalam array.
// let color = ["red", "green", "blue"];
// console.table(color);
// const removedColor = color.pop();// menghapus didalam var color dibaris terakhir
// console.table(removedColor); // data dari var yang dihapus

// //


// for.Each = Penggunaan forEach() untuk melakukan iterasi(pengulangan) pada setiap elemen array.[^7]
// const numbers = [1, 2, 3, 4, 5];

// // cara forEach simple
// numbers.forEach(function(a, b, c) { // a = item, b = index, c = array
//     console.log(c); // menampilkan seluruh isi array
//     console.log(`index ke.${b} adalah ${a}`);
// });
// //


// // cara forEach yang memisahkan function
// function print(a, b, c) {
//     console.log(`index ke.${b} adalah ${a}`);
// }
// numbers.forEach(print); // yang didalam kurung adalah function()
// //



// // case 5 pencarian dengan includes(), Method includes() untuk memeriksa keberadaan elemen dalam array
// const cities = ["Jakarta", "Surabaya", "Bandung"];
// console.log(cities.includes("Surabaya")); // Output: true // didalam array ini apakah ada "surabaya" // output bolean = true
// console.log(cities.includes("Medan")); // Output: false // karena gkn ada medan di array maka // output false


// // case 6 menambah diawal array unshift() 
// const tasks = ["Coding", "Testing"];
// tasks.unshift("Planning"); // diarray task tambah kan di index 0 = planning
// console.log(tasks); // Output: ["Planning", "Coding", "Testing"]

// // case 7 menghapus data diawal array shift()
// const queue = ["Pertama", "Kedua", "Ketiga"];
// const firstItem = queue.shift(); // menghapus data array di index 0
// console.log(firstItem); // Output: "Pertama"
// console.log(queue); // Output: ["Kedua", "Ketiga"]


// // case 8 mencari index sebuah data didalam array indexOf()
// const animals = ["kucing", "anjing", "kelinci"];
// console.log(animals.indexOf("anjing")); // Output: 1 // anjing di index 1
// console.log(animals.indexOf("hamster")); // Output: -1 // tidak ada dalam array


// // case 9 