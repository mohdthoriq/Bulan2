//kasir.js - berisi function untuk menghitung total dari array harga
export const produk = [
    { id: 1, nama: 'Baju', harga: 50000 },
    { id: 2, nama: 'Celana', harga: 75000 },
    { id: 3, nama: 'Sepatu', harga: 150000 },
    { id: 4, nama: 'Topi', harga: 30000 }
]
let cart = []
export function getprodukById(id) {
    return produk.find(produk => produk.id === id)
}
export function addToCart(id, jumlah) {
    const produk = getprodukById(id)
    if (!produk) {
        return 'produk tidak ditemukan'
    }
    cart.push({ ...produk, jumlah })
    return 'produk ditambahkan ke keranjang'
}
export function getcart() {
    return cart
}
export function getTotal(){
    return cart.reduce((total, produk) => total + produk.harga * produk.jumlah,0)
}
