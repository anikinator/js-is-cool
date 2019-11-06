let x = 5, y = 3, z = 8

if (x > y) {
    if (x > z) {
        console.log(x)
    }
} else if (y > x) {
    if (y > z) {
        console.log(y)
    }
} else if (z > x) {
    console.log(z)
    if (z > y) {
        console.log(z)
    }
}