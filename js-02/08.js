let str = "Привет, Мир!", result = 0

str = str.split("")

str.forEach(item => {
    result += item.charCodeAt()
})

console.log(result)