// for 👈


// for (let i = 0; i < 10; i++) {                   
//     let k = "";
//     for (let j = 20; j >= i*2; j--) {
//         k += "*";
//     }
//     console.log(k);
// }
// for (let i = 0; i < 10; i++) {
//     let k = "";
//     for (let j = 0; j <= i*2; j++) {
//         k += "*";
//     }
//     console.log(k);
// }

// for (let i = 0;i < 5; i++) {
//     let baris = "";
//     for (let j = 0; j <= i;j++){
//         baris += "";
//     for (let k = 0; k <= i; k++) {
//         baris += "+";
//     }}
//     console.log(baris);
// }


// while 👈
// while (condisition) {
//     //aksi
// increment/decrement
// }

// // do while 
// do {
//     //aksi
// } while (condition);


// // while 
// let i = 0;
// while (i < 10) { // 
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// } while (i < 10);

//

// for (let i = 0;i < 6;i++){
//     let nama = "thoriq";
//     console.log(nama);
// }


// // // latihan
// // "halo " + nama + "test"; // mengganti + ketika ingin memasukkan variabel kedalam string menggunakan `${...}`
// // `halo ${nama} test`; // hasilnya sama saja


// let con = "halo";  /// pembahsan dan contoh utk reverse atau putar balikkan huruf dari budi jadi idub 
// let reverString = con.split("").reverse().join("");
// console.log(reverString);


// function example1(nama = "Bambang"){
//     let a = 10;
//     let b = 20;
//     let c = a + b;
//     let hasil = "Ini A = " + a + " Ini B = " + b + " Ini C = " + c;
//     return 'Hello ' + nama + " Anda Kurang Beruntung";
// }
// console.log(example1());

// let example2 = function example2(nama = "Name is empty"){
//     let a = 10;
//     let b = 20;
//     let c = a + b;
//     let win = false;
//     let hasil = "Ini A = " + a + " Ini B = " + b + " Ini C = " + c;
//     return win ? "Anda Menang" : `Hello ${nama} Anda Kurang Beruntung In Function Example 2`;
// }
// console.log(example2());


// const example3 = (nama) => Hello ${nama};

// function e() { 
//     for (let i = 0; i < 10; i++) {
//         let row = "";
//         for (let j = 0; j <= 18; j++) {
//             if (i === 0 || i === 1 || i === 4 || i === 5 || i === 8 || i === 9){
//                 row += "*";
//             } else  {
//                     row += "_";
//                 }
//             }
//             console.log(row);
        
//         }
//     }

// e();


for (let i = 0; i < 10; i++){
    let k = "";
    for (let f = 0; f <= i; f++){
        k += " ";
    }
    for (let j = 18; j >= i*2; j--){
        k += "*";
    }
    for (let f = 18; f > 0; f--){
        k += " ";
    }
    for (let j = 18; j >= i; j--){
        k += "*";
    }
    for (let j = 10; j > 1 ; j--){
        k += "0";
    }
    console.log(k);
    }
    // console.log(k);

for (let i = 0; i < 10; i++){
    let k = "";
    for (let f = 0; f < 10 - i; f++){
        k += " ";
    }
    for (let j = 0; j <= i*2; j++){
        k += "*";
    }
    console.log(k);
}

