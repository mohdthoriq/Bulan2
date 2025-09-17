// booking
import { cariWaktu, formatJam } from "./cari/waktu.js";
import { cekSlot } from "./cek/cekSlot.js";
import { cekJadwal } from "./cek/cekJadwal.js";



const jadwal = {
  senin: { mulai: 9.00, selesai: 17.00 },
  selasa: { mulai: 9.00, selesai: 17.00 },
  rabu: { mulai: 9.00, selesai: 17.00 },
  kamis: { mulai: 9.00, selesai: 17.00 },
  jumat: { mulai: 9.00, selesai: 14.00 },
  sabtu: { mulai: 10.00, selesai: 15.00 },
  minggu: { mulai: 12.00, selesai: 16.00 },
};


console.log(cariWaktu(jadwal, "senin"));
console.log(cekSlot(jadwal, "sabtu", 9.00));
console.log(cekSlot(jadwal, "sabtu", 10.00));
console.log(cekSlot(jadwal, "minggu", 11.00));
console.log(cekJadwal(jadwal, "minggu", 16.00));
console.log(cekJadwal(jadwal, "jumat", 13.00));


