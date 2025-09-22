async function getComments() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/comments")
    let data = await res.json()

    // Filter email yang mengandung @gmail.com
    let gmailComments = data.filter(c => c.email.includes("@gmail.com"))

    console.log("Jumlah komentar dengan email Gmail:", gmailComments.length)
    console.log("Daftar komentar Gmail:", gmailComments)
  } catch (error) {
    console.log("Error:", error)
  }
}

getComments()
