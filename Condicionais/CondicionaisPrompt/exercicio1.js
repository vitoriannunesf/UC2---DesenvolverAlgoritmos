const prompt = require("prompt-sync")()

let codigo = Number(prompt("Digite o codigo:"))

if(codigo % 777 === 0){
    console.log("Acesso liberado")
}else{
    console.log("ALARME ATIVADO")
}