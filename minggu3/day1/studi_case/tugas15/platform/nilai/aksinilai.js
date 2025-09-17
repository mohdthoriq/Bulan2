// aksi nilai
import { nilai, getNilaiById } from "./nilaidata.js";

export default function tambahNilai(siswaId, kursusId, nilailist) {
    const dataNilai = getNilaiById(siswaId, kursusId);
    if (dataNilai) {
        dataNilai.nilai = nilailist;
        return dataNilai;
    } else {
        nilai.push({ nama: `Siswa${siswaId}`, kursusId, nilai: nilailist });
    }
    return true;
}

export { getNilaiById as cariNilai } from "./nilaidata.js";