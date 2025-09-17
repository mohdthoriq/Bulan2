import { cariBarang } from "./toko/index.js";

const barang = [
  { nama: 'laptop', harga: 5000000 },
];

const hasilPencarian = cariBarang(barang, 'laptop');
console.log(hasilPencarian);