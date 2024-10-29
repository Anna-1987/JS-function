const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];


const findLogin = function (allLogins, loginToFind) {
    // console.log(allLogins);
    // console.log(loginToFind);

    // for (const login of allLogins) {
    //     if (login === loginToFind) {
    //        return `Пользователь ${loginToFind} найден`
    //    } 
    // }
    // return `Пользователь ${loginToFind} не найден`;
    
    return allLogins.includes(loginToFind)
    ? `Пользователь ${loginToFind}  найден`
    : `Пользователь ${loginToFind} не найден`; 
} 


console.log((findLogin(logins, 'avocod3r')));
console.log((findLogin(logins, 'kiwidab3st')));
console.log((findLogin(logins, 'jam4l')));
console.log((findLogin(logins, 'poly1scute')));
