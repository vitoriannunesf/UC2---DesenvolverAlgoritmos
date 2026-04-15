const prompt = require('prompt-sync')({sigint: true})

function seuSuperPoder(){
    const pergunta = (prompt("Qual é o seu poder favorito?: "))

    console.log(`Uau! Ser capaz de ${pergunta} seria incrivel!`)

    
}
seuSuperPoder()