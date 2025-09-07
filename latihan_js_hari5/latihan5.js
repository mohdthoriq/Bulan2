// closure function

const gudang = (function() {
  let barang = [];
  return {
    tambah: function(item) { barang.push(item); }, // 
    tampil: function() { return barang.join(', '); },
    kurang: function(item) {
      let index = barang.indexOf(item);
      if (index !== -1) {
        barang.splice(index, 1);  // .splice adalah ,me remove sebuah data rumusnya (start:index??, target yang mau dihapus:2/1??)
      }
    }
  }
})();

gudang.tambah("Buku1");
gudang.tambah("Pensil1");
gudang.tambah("Penghapus1");
gudang.tambah("Pensil2");

console.log(gudang.tampil()); 
gudang.kurang('Pensil1'); 
console.log(gudang.tampil());


// API
const messageManager = (function(){
  let messages = [];
  const API_URL = 'https://api.example.com/messages';
  const API_KEY = 'your_api_key';

    const updatedisplay = () => {
    const messageList = document.getElementById('message-list');
    messageList.innerHTML = message.length > 0 ? messages.join(`<br>`):`Tidak ada pesan`;
   };

  const createFormData = (phone, message) => {
    const formData = new FormData();
    formData.append('phone', phone);
    formData.append(`country_code`, `+62`);
    console.log(`ini isi formdata${formData}`);
    return formData;
  };

  return {
    async sendMessage(phone, message) {
      try {
        const formData = createFormData(phone, message);

      }
    formData.append('message', message);
    return formData;
   }
  }

  
})();



