// Maior ou menor de idade com operador ternario
const prompt = require("prompt-sync")()

// Pede a idade do usuario
let idade = Number(prompt("Digite o sua idade "))
// usa o operador ternario
let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(resultado)