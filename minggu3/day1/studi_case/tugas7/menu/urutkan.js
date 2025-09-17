export function prosesUrutkan(data, urutan) {
  if (urutan === "asc") {
    return data.sort((a, b) => a.harga - b.harga);
  } else if (urutan === "desc") {
    return data.sort((a, b) => b.harga - a.harga);
  } else {
    return data;
  }
}