// Exercicio 1: Combinação de poderes
let poder1 = prompt("Escolha seu primeiro poder (fogo, gelo, raio): ")
let poder2 = prompt("Escolha o seu segundo poder para combinar: ")

// Cristais
let cristais1 = prompt("Quantos cristais vai usar para ativar o poder " + poder1 + "?")
let cristais2 = prompt("Quantos cristais vai usar para ativar o poder " + poder2 + "?")

// Converter para numeros
cristais1 = Number(cristais1)
cristais2 = Number(cristais2)

let totalCristais = cristais1 + cristais2 

alert(" Você combinou os poderes  " + poder1 +  " e "  + poder2 +  " usando "  + totalCristais +  " cristais mágicos no total. ")