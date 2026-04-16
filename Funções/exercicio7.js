const prompt = require('prompt-sync')({sigint: true})

function calcularArea(){
    const a = (prompt("Digite o valor da altura: "))
    const b = (prompt("Digite o valor da base: "))
 
    console.log(`A area do retangulo é ${a * b} metros. `)
}

calcularArea()
