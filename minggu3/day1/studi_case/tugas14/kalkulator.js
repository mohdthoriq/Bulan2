import { subtotal } from './hitung/subtotal.js';
import { diskon } from './hitung/diskon.js';
import { pajak } from './hitung/pajak.js';
import { kembalian } from './hitung/kembalian.js';

//total
const total = (subtotal, diskon, pajak) => {
  return subtotal - diskon + pajak;
};


const keranjang = [
  { name: 'Buku', price: 5000, qty: 2 },
  { name: 'Pensil', price: 2000, qty: 3 },
  { name: 'Penghapus', price: 1000, qty: 1 },
];

const subtotalHarga = subtotal(keranjang);
const diskonHarga = diskon(subtotalHarga, 0.5);
const pajakHarga = pajak(subtotalHarga, 10);
const totalHarga = total(subtotalHarga, diskonHarga, pajakHarga);
const uangBayar = 20000;
const uangKembalian = kembalian(totalHarga, uangBayar);

console.log('Subtotal: ', subtotalHarga);
console.log('Diskon: ', diskonHarga);
console.log('Pajak: ', pajakHarga);
console.log('Total: ', totalHarga);
console.log('Bayar: ', uangBayar);
console.log('Kembalian: ', uangKembalian);
