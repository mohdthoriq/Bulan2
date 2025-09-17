// whatsapp.js - import dengan alias: pisah as pisahNamaKontak, gabung as gabungDataKontak
import { pisah as pisahNamaKontak, gabung as tampilkanDataKontak  } from "./kontak.js";
const kontak1 = pisahNamaKontak("Irgi")

const daftarKontak = [
    { ...kontak1, email: "@gmail.com", telpon: "08123456789" }
]
console.log(daftarKontak);
