// siswa
import { siswa } from "./daftarsiswa.js";

export default function tambahSiswa(nama, umur, kelas) {
    const idBaru = siswa.length ? siswa[siswa.length - 1].id + 1 : 1;
    const siswaBaru = { id: idBaru, nama, umur, kelas };
    siswa.push(siswaBaru);
    return siswaBaru;
}

export { getSiswaById as cariSiswa } from "./daftarsiswa.js";