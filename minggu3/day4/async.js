function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("maou")
        }, 3000)
    })
}

async function showUser() {
    const User = await getUser();
    console.log("User", User)
}

showUser()