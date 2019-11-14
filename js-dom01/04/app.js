/* 5. Нужно взять и сделать функцию getInnerTextOfElement, которая принимает в качестве аргумента название например '#name'.
То внутри делает поиск по getElementById и берет innerText и возварашает.
НЕ МОЖНО использовать querySelector. Првоверяете аргумент. Начинается на точку или на #,
чтобы вызвать тот метод, который вам нужен.
*/

// TODO:
let yourId = "#sometag1"

function getInnerTextOfElement(idOrClass){
    if (idOrClass[0] == "#"){
        return document.getElementById(idOrClass).innerText
    }
    else if (idOrClass[0] == "."){
        return document.getElementsByClassName(idOrClass).innerText
    }
    else {
        alert("Sorry, no class, no id")
    }
}

getInnerTextOfElement(yourId)