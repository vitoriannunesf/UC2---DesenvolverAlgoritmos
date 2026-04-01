const prompt = require("prompt-sync")()

let nome = prompt("Qual seu nome? ")
let idade = prompt("Qual sua idade? ")
let cidade = prompt("Onde você mora? ")

console.log(`Olá ${nome} você tem ${idade} anos de idade e mora em ${cidade}, correto?`)