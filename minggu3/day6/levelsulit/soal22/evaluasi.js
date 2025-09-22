async function ProsesData(data) {
    if (!data || data.length === 0) {
        throw new Error('Data tidak boleh kosong');
    } else {
        return `Proses data berhasil`
    }
}
async function jalankan() {
    try {
        let data = await ProsesData([1, 2, 3, 4, 5])
        console.log(data);    
    } catch (error) {
        console.log(error);
    }
}
jalankan()