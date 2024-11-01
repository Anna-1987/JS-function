// const shouldRenew = confirm('Хотите ли вы продлить подписку');
// console.log(shouldRenew);


// let quantity = prompt('введите количество товаров');
// quantity = Number(quantity); //преобразовывает строку в число, если это возможно 
// console.log(quantity);
// console.log(typeof quantity);//typeof возвращает тип переменной

//------------Задача возведения в степень
let number = prompt('введите число');

let degree = prompt('введите степень');

const result = number ** degree;

const message = confirm(result);
console.log(result);