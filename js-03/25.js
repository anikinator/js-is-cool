// 25. Напишите функция, которая принимает аргументом строку и возврашает
// нам строку преобразуя первую букву строки в верхний регистр.

let str = 'some string'

str.slice(1)

function firsySymbolUpper(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(firsySymbolUpper(str))