//main.js - import function dan test
import * as kasir from './kasir.js'
kasir.addToCart(1, 2)
kasir.addToCart(3, 1)
console.log(kasir.getcart())
console.log('Total Harga: ', kasir.getTotal())