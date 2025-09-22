const card = document.querySelectorAll('.card')
let warna = ["green","blue","red","yellow","pink"]
let bord = ["3px solid red","3px solid pink","5px solid yellow","2px solid green","4px solid blue"]
card.forEach((n,i) => {
    n.style.backgroundColor = warna[i]
    n.innerHTML = `card ke- ${i+1}`
    n.style.border = bord[i]

})