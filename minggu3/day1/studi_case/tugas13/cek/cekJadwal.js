// cek jadwal
import { formatJam } from "../cari/waktu.js";

export const cekJadwal = (jadwal, hari, waktu) => {
  const slot = jadwal[hari];
  if (!slot) return `${hari} LIBUR`;
  return {
    hari,
    buka: formatJam(slot.mulai),
    tutup: formatJam(slot.selesai),
    status: waktu >= slot.mulai && waktu < slot.selesai
      ? "Tersedia"
      : "Tidak tersedia",
  };
};

