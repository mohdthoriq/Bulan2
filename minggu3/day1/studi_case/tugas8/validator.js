export const cekEmail = (gmail) => gmail.includes("@gmail.com");
export const cekTelepon = (telepon) => telepon.length >= 10 && telepon.length <= 12;
export const cekUsia = (usia) => usia >= 17;