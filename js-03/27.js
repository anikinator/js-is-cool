// 27. Напишите функция, которая принимает аргументом строку и преобразуйте например
// 'var_test_text' в 'varTestText'. Функция, конечно же, должен работать с любыми аналогичными строками.

let str = 'var_test_text_hello_world'

function transformString(str){
    str = str.split("")
    for (let i =0; i < str.length; i++){
        //console.log(i)
        if (str[i] == "_") {
            str[i + 1] = str[i + 1].toUpperCase()

        }
    }
    return str.join("").replace(/_/g,"")
}

console.log(transformString(str))