let helo = 'hEllO woRLd'
function capitalize() {
    helo = helo
        .split(' ') // pecah jadi array
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()) // ubah huruf pertama jadi besar dan sisanya kecil
        .join(' '); // gabungin lagi jadi string
    return helo;
}
console.log(capitalize(helo))

let campur = ['jahk4wi', 'hdak6hf', 'dsfb5heu', 'jfbiaei1io']
function urut() {
    campur = campur
        .sort((a, b) => {
        let angka1 = parseInt(a.match(/\d+/)[0]) // ngambil angka dari string
        let angka2 = parseInt(b.match(/\d+/)[0]) // ngambil angka dari string
        return angka1 - angka2 // ngurutinnya dari kecil ke besar
    })
    return campur.join(' ')
}
console.log(urut())


export function tambah(a, b) {
    return a + b;
}
export function kurang(a, b) {
    return a - b;
}

// named export
// di panggil di import nya harus nama function nya dan diletaak didalam ()
export const produk = [ 
    {id: 1, nama: 'teh manis', harga: 10000},
    {id: 2, nama: 'teh tawar', harga: 5000},
    {id: 3, nama: 'ayam goreng', harga: 15000},
    {id: 4, nama: 'nasi goreng', harga: 20000}
]
export function getprodukById(id) {
    return produk.find(produk => produk.id === id)
}

export default function halo() {
    return 'halo dunia'
}


// asyncronous function
