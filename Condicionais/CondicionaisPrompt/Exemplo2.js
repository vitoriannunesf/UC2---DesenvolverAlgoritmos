// Conta - switch case

// Importa a biblioteca prompt-sync
const prompt = require("prompt-sync")()
// Mostra um menu e pede para o usuario escolher uma opção
 
let opcao = prompt("Escolha uma opção: \n 1 - Ver saldo \n 2 - Depositar \n 3 - Sair \n digite: ")

// O switch compara o valor qeu o usuario vai fornecer
switch(opcao){
    // Caso o usuario digit 1
    case "1":
        console.log("Seu saldo é R$ 100 ")
        break
    case "2":
        console.log("Deposito realizado ")
        break
    case "3":
        console.log("Saindo do sistema ")
        break
        default:
            console.log(" Opção invalida")
            break
            
}