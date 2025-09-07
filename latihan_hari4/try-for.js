let dataHasil = [];
let tag = document.getElementById('tag1');

function calculator() {
    let next = true;
    
    do {
        // input operator nilai
        let operasi = prompt("masukkan operasi (+ ,  - ,  * ,  / )")
        let v1 = parseFloat(prompt("masukkan nilai pertama"));
        let v2 = parseFloat(prompt("masukkan nilai kedua"));
        let hasil;
        

        if (isNaN(v1) || isNaN(v2)) {
            alert("nilai tidak valid");
        } else if (operasi === "/" && v2 === 0 || operasi === "/" && v1 === 0) {
            alert("Pembagian dengan nol tidak valid");
        } else if (operasi !== "+" && operasi !== "-" && operasi !== "*" && operasi !== "/") {
            alert("operasi tidak valid");
        } else {
        switch (operasi) {
            case "+":
                hasil = v1 + v2;
                break;
            case "-":
                hasil = v1 - v2;
                break;
            case "*":
                hasil = v1 * v2;
                break;
            case "/":
                hasil = v1 / v2;
                break;
            default:
                alert("operasi tidak valid");
            }

           if (hasil !== undefined) { 
                dataHasil.push('hasil dari : '+ v1 + " " + operasi + " " + v2 + " = " + hasil );
                console.table(dataHasil);
                
            } 


         }
         next = confirm("apakah ingin melanjutkan?");   


    }while (next);
    if(dataHasil.length > 0 ) {
        tag.innerHTML = dataHasil.join('<br>');
    } else {
        tag.innerHTML = "gak ada hasil";
    }

}

function reset() {
    dataHasil = ['reset'];
    tag.innerHTML = 'reset';
    console.table(dataHasil);

}
