// A propriedade Length nos diz qual é o tamanho de uma string, incluindo os espaços.

const nome ="João Naosei Cavalo da Silva"
console.log(nome.length)

const nome2 = "Monkey D. Luffy"
console.log(nome2.length)

//////////////////////////////////
// Método: tolowerCase ()
// Transforma todas as letras da string em miniscula

const frase = " O DIa Esta LINdoooo DeMAis"
const fraseMinuscula = frase.toLocaleLowerCase()

console.log(fraseMinuscula)

//////////////////////////////////
// Método: toUpperCAse()
// Transforma todas as letras da string em maiuscula

const frase2 = "o dia esta Terminando"
const fraseMaiuscula = frase2.toUpperCase()

console.log(fraseMaiuscula)
//////////////////////////////////
// Método: trim()
// Retira espaços qeu existem antes e depois de sua string ( util em formularios e logins)

const email = "                   senaquinho@senacrs.com               "
console.log(email.trim()) 

/////////////////////////////////
// Método incluides(caracteres): determina um conjunto de caracteres pode ser contratado dentro
// de uma outra string retorna um valor booleano true e false

const frase3 = "hoje comi cenoura"
console.log(frase3.includes("pao"))
console.log(frase3.includes("batata frita"))

//////////////////////////////////////////
// Método: replaceAll(chars1, chars2): troca todas as ocorrências de um conjunto de caracteres (char1) por alguma outra coisa(char2)

const frase4 = "Hoje comi cenoura, adoro cenoura"
const novaFrase4 = frase4.replaceAll("cenoura" , "batata")
console.log(novaFrase4)