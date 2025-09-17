// data kursus
export const kursus = [
  { id: 1, nama: "HTML", harga: 100000, durasi: "1 bulan" },
  { id: 2, nama: "CSS", harga: 150000, durasi: "1 bulan" },
  { id: 3, nama: "JavaScript", harga: 200000, durasi: "2 bulan" },
  { id: 4, nama: "React", harga: 250000, durasi: "2 bulan" },
  { id: 5, nama: "Node.js", harga: 300000, durasi: "3 bulan" }
];

export function getKursusById(id) {
  return kursus.find((kursus) => kursus.id === id);
}