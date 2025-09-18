// fetch adalah fungsi bawaan dari javascript untuk mengambil data dari internet
// fetch mengembalikan promise
fetch("https://equran.id/api/v2/surat/114")
 .then(response => {
    if(!response.ok) {
        console.error("gagal ambil data quran")
    }
    return response.json()
 })
 .then(data => {
    console.log("quran berhasil di ambil")
    console.log(data)
 })
 .catch(e => console.error("error", e.message))
 .finally(() => console.log("proses selesai"))


 // fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
    .finally(() => console.log('selesai mengambil data'));