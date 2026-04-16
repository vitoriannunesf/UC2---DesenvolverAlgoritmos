const prompt = require('prompt-sync')({sigint: true})

function gritar(){
    const frase = "eu amo a luna e nala "
    const fraseMaiuscula = frase.toUpperCase() 
    
    console.log(frase)
    console.log(fraseMaiuscula)
    
}

gritar()