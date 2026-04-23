const prompt = require("prompt-sync")()

let opcao = prompt("Escolha uma opção: \n 1 - floresta \n 2 - deserto \n 3 - gelo \n Digite: ")

switch(opcao){

    case "1":
        console.log("Seu portal magico é o da Floresta")
        break
    case "2":
         console.log("Seu portal magico é o do Deserto")
         break
    case "3":
         console.log("Seu portal magico é o do Gelo")
         break
          default:
                console.log("Você nao escolheu nenhum portal")
    
    }