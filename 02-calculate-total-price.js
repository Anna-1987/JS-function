const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;

for (const value of cart) {
    total += value;
}

console.log('Total:', total);

const calculatoTotalPrice = function (items) {
    console.log('внутри ф-ции:', items);
let total = 0;

for (const item of items) {
    total += item;
}
    return total;
}

console.log(calculatoTotalPrice([1, 2, 3]));
console.log(calculatoTotalPrice([5, 10, 15, 20]));
console.log(calculatoTotalPrice([100, 200, 300]));

