

const slugify = function (string) {
    return  string.toLowerCase().split(' ').join('-');
}


console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('fbgjfd jknjksn jksnksn'));
console.log(slugify('Привіт мене звати Анна'));
