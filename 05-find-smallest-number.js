
const findSmallestNumber = function (numbers) {
    let smallestNumber = numbers[0];

    for (const number of numbers) {

        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }
    return smallestNumber;
}

console.log(findSmallestNumber([2, 8, 12, -2, 15]));
console.log(findSmallestNumber([100, 54, 8, 12, 47]));
console.log(findSmallestNumber([7, 21, 84, 15, 4]));