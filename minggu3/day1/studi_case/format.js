// untuk ngeexport ke app.js
export function keRupiah(angka){
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(angka)

}