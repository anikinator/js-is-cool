
// let img = document.createElement('img')
// img.src = "https://picsum.photos/200"
// img.alt = "It's just some static image"
// document.body.appendChild(img)

let userImageUrl = prompt("Enter your image url")
let userAngle = prompt("Enter custom angle to rotate your image")

// TODO: Perhaps this is not the best way to check URL. Exception not working properly.
async function checkUrl(userImageUrl){
    try {
        let response = await fetch(userImageUrl)

        if (response.ok) {
        console.log("hoooooray")
         } else {
         alert("HTTP error: " + response.status)
         }
    }
    catch(e) {
        console.log("Error has been handled")
        console.log(e)
        alert("omg, url isn't good, reload your page and try again")
    }
}

checkUrl(userImageUrl)

function checkNumber(myNumber){
    if (!isNaN(myNumber)){
       console.log("ok, it's number")
    }
    else alert(myNumber + " - is not a number. Try again.")
}

checkNumber(userAngle)

function createImg(imgUrl, id, customAngle){
    let img = document.createElement('img')
    img.src = imgUrl
    img.id = id
    img.style.transform = `rotate(${customAngle}deg)`
    img.style.position = "relative"
    document.body.appendChild(img)
}

for (let i = 0; i <= 4; i++){
    createImg(userImageUrl, i, userAngle*i)
}
