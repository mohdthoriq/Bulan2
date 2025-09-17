// aksi kursus
import { kursus } from "./kursusdata.js";

export default function tambahKursus(nama, harga, durasi) {
  const idBaru = kursus.length ? kursus[kursus.length - 1].id + 1 : 1;
  const kursusBaru = { id: idBaru, nama, harga, durasi };
  kursus.push(kursusBaru);
  return kursusBaru;
}

export { getKursusById as cariKursus } from "./kursusdata.js";

