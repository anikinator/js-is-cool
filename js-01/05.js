let dot = ".", sharp = "#", result = ""

for (var i = 0; i < 20; i++){

    if (i == 0) {
        result = dot
    }
    else if (i < 19){
        result = result + sharp + dot
    }
}
console.log(result)