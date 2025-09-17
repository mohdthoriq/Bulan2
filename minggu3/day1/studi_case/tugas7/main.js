import { urutkanBerdasarkanHarga } from "./menu/index.js";

const barang = [
  { nama: 'laptop', harga: 5000000 },
    { nama: 'smartphone', harga: 3000000 },
    { nama: 'tablet', harga: 2000000 },
];

const hasilUrutan = urutkanBerdasarkanHarga(barang, 'asc');

console.log(hasilUrutan);