let str = "abcde"

console.log(str[0], str[1],str[str.length-1])

str = str.split("")

str.forEach(item => {if (item == "a" || item == "b" || item == "e") console.log("I know this symbol:" + item)})