//
import { nilai, cariNilai } from './platform/nilai/index.js';
import { kursus, carikursus } from './platform/kursus/index.js';
import { siswa, aksiSiswa } from './platform/siswa/index.js';

// akses
function main() {
    console.log("Data Nilai:", nilai.nilai);
    console.log("Data Kursus:", kursus.kursus);
    console.log("Data Siswa:", siswa.siswa);
    
}

main();