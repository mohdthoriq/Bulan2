async function fetchData() {
    try {
        const response = await fetch("https://equran.id/api/v2/tafsir/112")
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.error("error", e)
    }
}

fetchData()