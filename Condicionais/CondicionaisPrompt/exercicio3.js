const prompt = require("prompt-sync")()

let prato = prompt("Escolha um prato maluco: \n 1 - pizza de sorvete \n 2 - hamburger de gelatina \n 3 - sushi de chocolate \n 4 - batata frita com calda de morango \n 5 - spaghetti de bala \n Digite: ")

switch(prato){
    case "1":
        console.log("O seu prato maluco é a pizza da sorvete")
        break
    case "2":
        console.log("O seu prato maluco é o hamburguer de gelatina")
        break
    case "3":
       console.log("O seu prato maluco é o sushi de chocolate")
       break
    case "4":
        console.log("O seu prato maluco é a batata frita com calda de morango")
        break
    case "5":
        console.log("O seu prato maluco é o spaghetti de bala") 
        break
        default:
            console.log("Voce nao tem prato maluco")

}
