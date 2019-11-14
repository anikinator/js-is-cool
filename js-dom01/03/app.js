let myId = prompt("Enter id of your element")

function deleteById(myId){
    if (document.getElementById(myId)){
        let elem = document.getElementById(myId)
        return elem.parentNode.removeChild(elem)
    }
    else alert("There is no element with id=" + myId)
}

deleteById(myId)