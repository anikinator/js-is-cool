// 29. Сгенерируйте массив из n случайных чисел с двумя знаками после запятой.
// Переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень,
// не используя функцию Math.pow().

let arr1 = []

let elements = 10, result = 1

// Generate array with pseudo random integers
for (let i = 0; i <= elements; i++ ){
    arr1.push((Math.random()*10).toFixed(2))
}

for (let i = 0; i <= elements; i++){
    for (let j = 0; j <= 5; j++ ){
        result *= arr1[i]
    }
    console.log(result.toFixed(2))
}