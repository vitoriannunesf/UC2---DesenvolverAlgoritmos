const prompt = require('prompt-sync')({sigint: true})

function criarApelidos(nome, animal){
    const a = (prompt("Digite seu nome: "))
    const b = (prompt("Digite um animal: "))
     
    console.log(`Seu novo apelido é: ${a} ${b}`)
}

criarApelidos()