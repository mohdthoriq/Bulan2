// cari waktu
export const formatJam = (jam) => {
  return jam.toString().padStart(2, "0") + ".00";
};

export const cariWaktu = (jadwal, hari) => {
  const slot = jadwal[hari];
  if (!slot) return `${hari} LIBUR`;
  return `${hari} buka jam ${slot.mulai} - ${slot.selesai}`;
};