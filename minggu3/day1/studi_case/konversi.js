// untuk nge export ke file app.js
export function judul(teks){
    teks = teks
    .split(' ')
    .map(teks => teks[0].toUpperCase() + teks.slice(1).toLowerCase())
    .join(' ');
    return teks
}