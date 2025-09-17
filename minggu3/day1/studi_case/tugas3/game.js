//game.js - DEFAULT export function hitungTotalPoin, NAMED exports konstanta
let poin = [200, 150, 300, 180, 120]
export let bonus = 50;
export let poin_Max = 1000
export default function hitungTotalPoin() {
    let total = 0;
    for (let i = 0; i < poin.length; i++) {
        total += poin[i];
        if (total < poin_Max) {
            total + bonus;
        } else if (total > poin_Max) {
            total = poin_Max;
        }
    }
    return total;
}
