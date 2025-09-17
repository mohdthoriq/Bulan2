// nilai 

export const nilai = [
    { id: 1, nama: "Alice", kursusId: 1, nilai: 85 },
    { id: 2, nama: "Bob", kursusId: 2, nilai: 92 },
    { id: 3, nama: "Charlie", kursusId: 3, nilai: 78 },
    { id: 4, nama: "David", kursusId: 1, nilai: 88 },
    { id: 5, nama: "Eve", kursusId: 2, nilai: 95 }
]

export function getNilaiById (id) {
    return nilai.find((n) => n.nama === `Siswa${siswaid}` && n.kursusId === kursusid);
}