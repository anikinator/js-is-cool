// calculate credit

let summ = prompt("Enter summ you want to let")

let bankPercent = 24

let periodMonths = 36

let youOwePerMonth, youOweTotal

function monthlySumm(summ){
    return summ / periodMonths
}

function summPerMonth(summ){
    return summ * bankPercent/100 + summ
}

function total(summ){
    return summ * periodMonths
}

youOwePerMonth = summPerMonth(monthlySumm(summ))
console.log("you owe every month: " + youOwePerMonth + "$")

total = total(youOwePerMonth)
console.log("you owe total: " + total + "$")