// 28. Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
// Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

let arr = [1, 2, 3, "a", "b", "c", "4", "5", "6"]
let result = 0

for (let i = 0; i <= arr.length; i++){
    if (!isNaN(arr[i])){
        result += arr[i]
    }
    else if (typeof(arr[i]) == "string") { result += arr[i].charCodeAt()}



}

console.log(result)