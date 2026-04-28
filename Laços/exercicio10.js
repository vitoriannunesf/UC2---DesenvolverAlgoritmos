let velocidade = [10, 120, 195, 90, 75]
let i= 0 
let maior = velocidade[0]

while(i < velocidade.length){
    if(velocidade[i] > maior){
        maior = velocidade[i]
    }
    i++
}
console.log("O corredor mais rapido atingiu " + maior + "km/h")