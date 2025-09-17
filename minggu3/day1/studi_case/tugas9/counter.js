export const min = 1;
export const max = 100;

export default function Counter() {
    let count = 1;
    return function () {
        if (count > max) {
            count++;
        }
    return count++;
    }
}