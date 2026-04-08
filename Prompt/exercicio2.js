const prompt = require("prompt-sync")()

let nome = prompt("Qual o seu nome?") 
let saborDaPizza = prompt("Qual seria o sabor da pizza?")
let tamanhoDaPizza = prompt("Qual o tamanho?")

console.log(`Olá ${nome}, qual seria o sabor da pizza? ${saborDaPizza}. E por fim, qual sera o tamanho? ${tamanhoDaPizza}`)