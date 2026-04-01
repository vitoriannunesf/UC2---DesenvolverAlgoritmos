const prompt = require("prompt-sync")()

let nome = prompt("Qual seu nome? ")
let idade = prompt("Qual a sua idade? ")

console.log(`Olá ${nome} você tem ${idade} anos de idade.`)
