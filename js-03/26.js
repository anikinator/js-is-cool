// 26. Напишите функция, которая принимает аргументом строку и возврашает нам строку
// преобразуя последнюю букву строки в верхний регистр.

let str = "some string"

function lastCharUpper(str){
    return str.slice(0,-1) + str.charAt(str.length-1).toUpperCase()
}

console.log(lastCharUpper(str))