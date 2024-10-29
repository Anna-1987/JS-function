
const changeCase = function (string) {
    const letters = string.split('');//делает строку в массив
    let inwertedString = '';

    for (const letter of letters) {
        // console.log(letter);
    
        inwertedString += letter === letter.toLowerCase()
            ? letter.toUpperCase()
            : letter.toLowerCase();
    }
    return inwertedString;
}

console.log(changeCase('Hello Word'));
console.log(changeCase('freedom'));
console.log(changeCase('HOME'));