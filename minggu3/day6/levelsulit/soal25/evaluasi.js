async function hitung() {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos")
        const hasil = await data.json()
        let jumlah =  hasil.filter(item => item.completed).length
        console.log(`total completed:true = ${jumlah}`)
    } catch (error) {
        console.log(error)
    }
}
hitung()