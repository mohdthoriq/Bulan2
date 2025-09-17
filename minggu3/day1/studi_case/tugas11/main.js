import { pendapatan, pengeluaran } from './keuangan/index.js';

console.log(`Pendapatan: ${pendapatan()}`);
console.log(`Pengeluaran: ${pengeluaran()}`);
console.log(`Sisa pendapatan: ${pendapatan() - pengeluaran()}`);
