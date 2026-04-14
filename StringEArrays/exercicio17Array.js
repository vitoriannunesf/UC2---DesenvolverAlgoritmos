let animais = ["cachorro" , "gato" , "coelho"]
animais.push("elefante")
console.log(animais)

animais.unshift("leão")
console.log(animais)

animais.shift()
console.log(animais)

animais.pop()
console.log(animais)

let animais2 = ["jaguatirica" , "capivara"]
let todos = animais.concat(animais2)
console.log(todos)