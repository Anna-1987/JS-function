//------------------------------------------------------------------
// const fn = function () {
//     // console.log(arguments);

//     const args = Array.from(arguments);
//     console.log(args);
     
// };

// ----------------------------------------------------------------
// const fn = function (a, b, c, ...args) {
//     console.log(`${a} ${b} ${c}`);
//     console.log(args);
     
//  };


// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// ------------------------------------------------------------

// const add = function (...args) {
//     let total = 0;
//     for (arg of args){
//         total += arg;
//     }
//     return total;
// };

// console.log(add(1, 2, 3,36));
// console.log(add(1, 2, 3, 4));

// -----------------------------------------------------------------
const filterNumbers = function (arrey, ...args) {
    // console.log('arrey', arrey);
    // console.log('args', args)

    const uniqueElements = [];

    for (const element of arrey) {
        // console.log(element);

        if (args.includes(element)) {
            // console.log(`${element} есть везде`);
            uniqueElements.push(element);
        }
    }
    return uniqueElements;
}


console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filterNumbers([10, 22, 36, 45, 59], 10, 15, 22, 3, 8));
console.log(filterNumbers([1, 12, 30, 4, 5], 10, 5, 12, 30, 8));