let period = prompt("Enter value: h - hours, d - days, w - weeks, m - month")

let digitPart, symbolPart, secondsPerHour = 3600, result = 0

digitPart = parseInt(period)
if (!isNaN(digitPart)) {
symbolPart = period.slice(-1)

switch(symbolPart){
    case "h": result = digitPart * secondsPerHour
    break
    case "d": result = digitPart * secondsPerHour * 24
    break
    case "w": result = digitPart * secondsPerHour * 24 * 7
    break
    case "m": result = digitPart * secondsPerHour * 24 * 30
    break
    default:
    result = 0
    console.log("sorry, you enter unacceptable value, check period parameter number[h|d|w|m]")
  }
  console.log("Seconds in your period: " + result)
}
else  console.log("sorry, you enter unacceptable value")