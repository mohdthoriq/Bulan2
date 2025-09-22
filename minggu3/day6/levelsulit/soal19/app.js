import * as hasil from "./konversi.js"

const data = {nama:"irgi", jurusan:"programmer"}
console.log(hasil.toJSON(data))
console.log(hasil.toObject(hasil.toJSON(data)))