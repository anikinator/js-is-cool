// 23. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

let currentDate = '2025-12-31'

currentDate = currentDate.split("-").reverse()

console.log(currentDate.join("."))

//console.log(currentDate.replace(/-/g,"."))