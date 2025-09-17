export const siswa = [
    { id: 1, nama: "Alice", umur: 15, kelas: "10A" },
    { id: 2, nama: "Bob", umur: 16, kelas: "11B" },
    { id: 3, nama: "Charlie", umur: 15, kelas: "10C" },
    { id: 4, nama: "David", umur: 17, kelas: "12A" },
    { id: 5, nama: "eve", umur: 16, kelas: "11C" }
]


export function getSiswaById(id) {
    return siswa.find(siswa => siswa.id === id);
}