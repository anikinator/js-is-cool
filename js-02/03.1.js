let secondsInHour = 3600

function secondsInHours(hours) {

    if (isNaN(hours)) {
        return alert("It wasn't a number, sorry. Try again")
    }
    else  return hours = hours * secondsInHour

}

console.log(secondsInHours(prompt("enter hours number")))