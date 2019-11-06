let fizz = "F", bazz = "B", max = 50, result = ""

for (i = 1; i <= max; i++){

    if (i % 3 == 0 ){
        result = result + fizz + " "
    }
    else if (i % 5 == 0){
        result = result + bazz + " "
    }
    else if (i % 3 == 0 && i % 5 == 0){
        result = result + fizz + baxx + " "
    }
    else result = result + i + " "
}

console.log(result)