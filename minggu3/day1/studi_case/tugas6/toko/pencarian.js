export const cariBarang = (barang, keyword) => {
  return barang.filter((item) =>
    item.nama.toLowerCase().includes(keyword))
    .map((item) => item.nama);
};