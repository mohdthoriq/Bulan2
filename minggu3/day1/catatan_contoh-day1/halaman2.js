// named export
import {tambah } from "./halaman1.js";
import {kurang } from "./halaman1.js";

console.log(tambah(10, 8));
console.log(kurang(10, 8));




// name export
import { getprodukById } from "./halaman1.js";
let cart = []
export function addToCart(id, jumlah) {
    const produk = getprodukById(id)
    if (!produk) {
        return 'produk tidak ditemukan'
    }
    cart.push({...produk, jumlah})
    return 'produk ditambahkan ke keranjang'
}
export function getCart() {
    return cart
}
export function getTotal() {
    return cart.reduce((total, produk) => total + produk.harga * produk.jumlah, 0)
}
