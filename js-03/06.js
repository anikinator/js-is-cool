// 6. Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
//var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}

let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}

for (let key in obj) {
    console.log("this is the key: " + key + ", and this is the value: " + obj.key)
}