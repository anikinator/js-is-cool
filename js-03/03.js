// 3.  Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива. Через for of

let arr = [1, 2, 3, 4, 5], result = 1

for (let i of arr){
    result *= i
   // console.log(i)
}

console.log(result)