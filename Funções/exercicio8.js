const prompt = require('prompt-sync')({sigint: true})

function qualSuaIdade(){
    const i = (prompt("Quantos anos vc tem? "))
    const m = i * 12

    console.log(`Voce tem aproximadamente ${m} meses. `)

}
qualSuaIdade()