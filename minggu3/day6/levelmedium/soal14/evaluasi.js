async function post() {
    try {
        let test = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await test.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
post()