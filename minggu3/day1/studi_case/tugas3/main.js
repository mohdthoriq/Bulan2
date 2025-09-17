import a, { bonus, poin_Max } from "./game.js";


let total = a();
if (total >= poin_Max) {
    console.log(`poin maximum adalah ${poin_Max}, poin anda adalah ${total}`);
} else {
    console.log(`poin anda adalah ${total} & bonus anda adalah ${bonus}, total poin ${total + bonus}`);
    
}

// console.log(total);

