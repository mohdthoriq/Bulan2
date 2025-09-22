async function ambilUser(id) {
    try {
        let data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        let hasil = await data.json()
        console.log(hasil);
        
    } catch (error) {
        console.log("salah")
    }
}
ambilUser(1)


