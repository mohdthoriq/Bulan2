# Belajar JavaScript Array & Looping

## slice()

``` js
let buah = ['kiwi','strawberry','anggur','mangga']
let con = buah.slice(1,3) // memilih (start(index), end(index))
console.log(con)
```

## splice()

Hapus/tambah elemen di index tertentu.

``` js
let nama = ['irgi','kahfi','farid']
nama.splice(1,2) // (index, jumlah yang dihapus)
console.log(nama);
```

## forEach()

Loop untuk mengubah nama dalam array.

``` js
let product = ['laptop','mouse','keyboard']
console.table(product)  

// basic function
function ubah(a, b, c){ 
    product[b] = `edit ${a}`;
    console.table(c);
}
product.forEach(ubah)
console.table(product)

// closure function
product.forEach(function(a, b, c) {
    product[b] = `tes ${a}`;
    console.table(c);
})
console.table(product)
```

## push()

Tambah data ke index terakhir.

``` js
product.forEach(function(a, b, c){
    product.push(`tambah pake .push di foreach ${a}`)
});
console.table(product)
```

## pop()

Menghapus data terakhir.

``` js
product.forEach(function(a, b, c){
    c.pop()
});
console.table(product)
```

## unshift() dan shift()

``` js
product.unshift('tv','ac')
console.table(product)

product.shift()
console.table(product)
```

## map()

Transformasi array, menghasilkan array baru.

``` js
let harga = [10000,20000,30000]
let har2 = harga.map(function(a) {
    return a * 2;
})
console.log(har2)
```

## destructuring array

``` js
let huruf = [1, 3, 5, 7]
let [x, y, z, t] = huruf
console.log(x,y,z,t)
```

## spread operator

``` js
let angka = [1, 2, 3, 4]
let we = [7,8,9,10]
let gabung = [...angka,5,6,...we]
console.log(gabung)
```

## reduce()

``` js
let penjualan = [3,2,7,5,6]
let totalpenjualan = penjualan.reduce(function(a,b,c,d) { 
    console.log(`${c}. ${a} + ${b} = ${a + b} => ${d}`)
    return a + b;
},14)
```

## includes()

``` js
let huruf = [1,3,5,7]
console.log(huruf.includes(2)) // false
console.log(huruf.includes(7)) // true
```

## sort()

``` js
let coba = [13,45,14,2,5]
coba.sort((a,b)=>a-b)
console.log(coba)
coba.sort((a,b)=>b-a)
console.log(coba)
```

## filter()

``` js
let nilai = [1,4,10,15,98,100]
let nilai2 = nilai.filter(n => n <= 10)
console.log(nilai2)
let nilai3 = nilai.filter(n => n % 2 != 0)
console.log(nilai3)
```

## find()

``` js
let Exfind = nilai.find(n => n > 12)
console.log(Exfind)
```

## some()

``` js
let Exsome = nilai.some(n => n == 10)
console.log(Exsome)

let Exsome2 = nilai.some(n => n % 2 != 0)
console.log(Exsome2)
```

## every()

``` js
let Exevery = nilai.every(n => n <= 100)
console.log(Exevery)
```

## findIndex()

``` js
let Exfindindex = nilai.findIndex(n => n == 100)
console.log(Exfindindex)
```

## flat()

``` js
let buah2 = ['manggis','mangga','apel','jeruk',['pisang','rambutan','semangka']]
let gabuah = buah2.flat()
console.log(gabuah)
```

## flatMap()

``` js
let Exflatmap = nilai.flatMap(n => n * 2)
console.log(Exflatmap)

let Exflatmap2 = nilai.flatMap(n => [n * 5])
console.log(Exflatmap2)
```
