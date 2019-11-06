let dayOfWeek = ["sunday","monday","tusday","wednsday","thursday","friday","saturday"]

let currentDate = new Date(Date.now())

let currentDay = currentDate.getDay()

typeof(currnetDay)

dayOfWeek.forEach((item,index) => {
    if ((currentDay == index) && (index == 0 || index == 6)) {
        console.log("just relax, it's just a weekend: " + item)
    }
    else if (currentDay == index) {
        console.log("alarm! working day: " + item)
    }
 })

// ternary
 dayOfWeek.forEach((item,index) => {
    ((currentDay == index) && (index == 0 || index == 6)) ? console.log("just relax, it's just a weekend: " + item) :
    ((currentDay == index)) ? console.log("alarm! working day: " + item) :
    console.log("ups")
 })