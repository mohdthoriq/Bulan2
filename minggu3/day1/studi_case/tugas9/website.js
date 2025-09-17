// default export
import counter from "./counter.js";

const tambah = counter();
console.log(tambah());
console.log(tambah());
console.log(tambah());

// named export
import { min, max } from "./counter.js";
console.log('minimal:',min);
console.log('maximal:',max);

// import all
import * as obj from "./counter.js";
const test = obj.default();
console.log(test()); // ini akan akses yang default
console.log(test());
console.log('minimal:',obj.min); // ini yang min
console.log('maximal:',obj.max); // ini yang max