const ul = document.getElementById('daftar')
async function Data() {
    try {
        let surah = await fetch('https://equran.id/api/v2/surat')
        let data = await surah.json()
        data.data.forEach((n) => {
            let li = document.createElement('li')
            li.innerHTML = n.namaLatin
            ul.appendChild(li)
        })
    } catch (error) {
        console.log(error);
    }
}
Data()