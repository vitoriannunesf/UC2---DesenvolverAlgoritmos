let numeros = [10, 25, 55, 200, 30, 1]
let i = 0
let maior = numeros[0]

while(i < numeros.length){
    if(numeros[i] > maior){
        maior = numeros[i]
    }
    i++
}
console.log(" O seu maior tesouro é: " + maior + ". Você ficou rico!")