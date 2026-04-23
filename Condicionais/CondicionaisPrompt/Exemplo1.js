// VERIFICANDO SE O NUMERO É PAR OU IMPAR
const prompt = require("prompt-sync")()

let numero = Number(prompt("Digite um numero: "))

//Condicionais id/else
if(numero % 2 === 0){
    console.log("Esse numero é par ")
}else{
    console.log("Esse numero é impar ")
}
