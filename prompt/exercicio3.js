const prompt = require("prompt-sync")()

let nome = prompt("Qual seu nome?")
let profissao = prompt("Qual sua profissao?")
let arma = prompt("Voce usa algum tipo de arma?")

console.log(`Meu nome é ${nome}, eu trabalho como ${profissao} e uso uma ${arma} para a minha defesa`)