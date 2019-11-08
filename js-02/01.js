let yourNumber = Number(prompt("Please, enter your number"))
let result = 0

for (let i = 0; i <= yourNumber; i++){
    if (i % 2 != 0){
        result = result + i
    }
}
console.log(result)