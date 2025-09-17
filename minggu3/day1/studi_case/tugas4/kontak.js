//kontak.js - export functions pisah, gabung
export function pisah(nama) {
    return { nama }
}
export function gabung(kontak) {
    console.log(`${kontak.nama}, email: ${kontak.email}, telpon: ${kontak.telpon}`);
}
