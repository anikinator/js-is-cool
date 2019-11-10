// 14. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.

let someDate = "2025-12-31"

someDate = someDate.split("-").reverse()

console.log(someDate.join("/"))