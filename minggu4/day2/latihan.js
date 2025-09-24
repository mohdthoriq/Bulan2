// const form = document.getElementById("login");
// const password = document.getElementById("password");
// const email = document.getElementById("email");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // Trim whitespace to handle inputs with only spaces
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();

//   if (emailValue === "") {
//     console.log("Email tidak boleh kosong");
//   } else if (passwordValue === "") {
//     console.log("Password tidak boleh kosong");
//   } else if (password.value.length < 8) {
//     console.log("Password harus memiliki setidaknya 8 karakter");
//   } else {
//     alert("Berhasil login!");
//   }
// });

document.getElementById('format').addEventListener('click', function(e) {
    e.preventDefault();
  
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const msg = document.getElementById('msg');
  
    msg.innerHTML = '';
  
    if (nama === '' || email === '' || password === '') {
        msg.innerText = 'Semua field harus diisi';
        msg.style.color = 'red';
    } else if (password.length < 8 || !/^[a-zA-Z0-9]+$/.test(password)) {
        msg.innerText = 'Password harus memiliki minimal 8 karakter dan hanya boleh huruf dan angka';
        msg.style.color = 'red';
    } else if (!email.includes('@')) {
        msg.innerText = 'Email harus mengandung karakter @';
        msg.style.color = 'red';
    } else {
        alert('berhasil');
    }
  },{once: true})




  document.getElementById('contact').addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const telp = document.getElementById('telp').value.trim();


    if (nama === '' || email === '' || telp === '') {
        console.log('Semua field harus diisi');
    } else if (!email.includes('@')) {
        alert('Email harus mengandung karakter @');
    } else if (!/^[0-9]{10,}$/.test(telp)) {
        alert('Nomor telpon harus memiliki minimal 10 angka');
    } else {
        alert('berhasil');
    } 
  })