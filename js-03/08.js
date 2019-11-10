/* 8. Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива. */

let arr = [-5, 8, 4, 9, -7, -234, 2, -42]
let result = 0

positive = arr.filter(item => {return item > 0})

positive.forEach(item => {
    result += item
})

console.log(result)