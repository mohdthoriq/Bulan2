async function data() {
    let data = await fetch('https://jsonplaceholder.typicode.com/comments')
    data = await data.json()
    data.filter((item) => {
        item.email.includes('@gmail.com')
        console.log(item)
    })
}
data()