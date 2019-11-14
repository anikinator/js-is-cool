let yourTag = prompt("Please, enter any existing tag you want to add")
function createCustomElement(customTag){
    return document.createElement(customTag)
}

function appendCustomChild(createdTag){
    document.body.appendChild(createdTag)
}

appendCustomChild(createCustomElement(input(yourTag)))