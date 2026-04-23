// SWITCH
// Alternativa para multiplos if/else, quando  compararmos o mesmo valor com varios casos

let diaDaSemana = 5

switch(diaDaSemana){
    case 1:
        console.log("Hoje é segunda-feira")
        break
    case 2:
        console.log("Hoje é terça-feira")
        break
    case 3:
        console.log("Hoje é quarta-feira")
        break
    case 4:
        console.log("Hoje é quinta-feira")
        break
    case 5:
        console.log("Hoje é sexta-feira")
        break
    case 6:
        console.log("Hoje é sabado")
        break
    case 7:
         console.log("Hoje é domingo")
         break
         default:
            console.log("Dia invalido")
}
// O break evita que os proximos cases sejam executados
// O default é executado quando nenhum case corresponde
   