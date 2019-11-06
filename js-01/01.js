let arr1 = []

// Generate array with pseudo random integers
for (let i = 0; i <= 19; i++ ){
    arr1.push(Math.round(Math.random()*10)*8)
}

console.log(arr1)

// Print values which greater then 50
for (let i of arr1) {
    if (i >= 50) {
        console.log(i)
    }
}

arr1.forEach(item => {if (item >= 50) console.log(item)})