// buku.js - export DEFAULT object dengan 3 function
export default  {
    hitungJumlah : function(a,b) {
        return a + b;
    },
    cariBuku : function(judul, penulis) {
        const daftarBuku = [
            { judul: 'Harry Potter', penulis: 'J.K. Rowling'},
            { judul: 'Lord of the Rings', penulis: 'J.R.R. Tolkien'},
            { judul: 'The Hobbit', penulis: 'J.R.R. Tolkien'}
        ]
        return daftarBuku.find(buku => buku.judul === judul);
    },
    BukuTebal : function(judul, tebal) {
        return {judul: judul, tebal: tebal};
    }
}