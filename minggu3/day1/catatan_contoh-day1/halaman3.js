
import { addToCart, getCart, getTotal } from "./halaman2.js";
// klo mau panggil semua function  adalah 
import * as x from "./halaman2.js";
// x itu bebas namanya, bisa ganti nama lain

x.addToCart(3, 5); // cara panggil 1 function
x.addToCart(1, 3); // cara panggil 1 function
x.addToCart(4, 4);

console.log(addToCart(1, 5)); 
console.log(addToCart(2, 1));
console.log(addToCart(4, 4));
console.log(`isi keranjang`,getCart());
console.log(`total harga`,getTotal());


import halo from "./halaman1.js"; // import default tidak perlu {} // dan nama bebas
console.log(halo());