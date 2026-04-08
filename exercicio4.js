const prompt = require("prompt-sync")()

let nome = prompt("Qual seu nome?")
let idade = prompt("Qual sua idade?")
let hobby = prompt("O que voce gosta de fazer?")
let desenhoFav = prompt("Qual seu desenho favorito?")
let serieFav = prompt("Qual sua serie favorita?")
let curiosidade = prompt("Conte uam curiosidade sobre voce.")
let time = prompt("Para qual time voce torce?")

console.log(`Meu nome é ${nome}, eu tenho ${idade} anos, o que eu mais gosto de fazer é ${hobby}. Já de desenho eu gosto muito de ${desenhoFav} e a minha serie favotira é ${serieFav}. Uma curiosidade sobre mim, que no caso nao é tao curiosidade assim, é que eu amo ${curiosidade} e é claro que eu torço para o melhor time que é o ${time}.`)