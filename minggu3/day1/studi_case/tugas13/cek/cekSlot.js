// cek slot
import { formatJam } from "../cari/waktu.js";

export const cekSlot = (jadwal, hari, waktu) => {
  const slot = jadwal[hari];
  if (!slot) return `${hari} LIBUR`;
  return waktu >= slot.mulai && waktu < slot.selesai
    ? `Jam ${formatJam(waktu)} tersedia`
    : `Jam ${formatJam(waktu)} tidak tersedia`;
};
