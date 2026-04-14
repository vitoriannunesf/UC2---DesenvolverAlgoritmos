// Arrays são listas de elementos ou uma estrutura de dados maior

const listaCompras = ["batata" , "alface" , "queijo"]
console.log(listaCompras)

// Arrays armazena elemntos de qualquer tipo
const meuArrayDiverso = ["banana" , 15 , true]
console.log(meuArrayDiverso)

//Arrays tem indices para "endereçar" seus elementos e SEMPRE começa em 0
//const arrayFrutas = ["banana" , "maça" , "tomate"]
//       indices    ->    0         1          2   
// Para acessar esse elemento, basta informar o seu endereço/indice
// const segundoItem = arrayFrutas[2]

arrayFrutas = ["banana" , "maça" , "tomate"]
const segundoItem = arrayFrutas[2]
console.log(segundoItem)

//////////////////////////////////////////
// PROPRIEDADES DE ARRAY
//
// Propriedades length: nos diz qual é a quantidade de itensde um array
const pokemon = ["bulbasauro" , "squirtle" , "charmander"]
const quantidadeItens = pokemon.length
console.log(quantidadeItens)
///////////////////////////////////////////
// Propriedades ou Método includes(elemento): determinase um array quando contém um determinado elemento. Sempre retorna um true(se sim) ou false(se não)
const seriesBoas = ["Breaking Bad" , "Brooklyn Nine-Nine"]

const temBreakingBad = seriesBoas.includes("Breaking Bad")
const temGOT = seriesBoas.includes("Brooklyn Nine-Nine")

console.log("Na array seriesBoas, tem Breaking Bad? " , temBreakingBad)
console.log("Na array seriesBoas, tem GOT? " , temGOT)
////////////////////////////////////////////
// Propriedade ou Método push(elemento): adiciona um ou mais elementos ao FINAL de um array
const numeros = [1, 2, 3]
numeros.push(4)
console.log(numeros)
numeros.push(5, 6, 7, 8)
console.log(numeros)
////////////////////////////////////////////
// Propriedades ou Método unshift(elemento): adiciona um novo item no COMEÇO do array
let cores = ["azul" , "verde"]
cores.unshift('vermelho')
console.log(cores)
////////////////////////////////////////////
// Propriedades ou Método shift(): Remove do começo ( o primeiro item do array)
let frutas = ["maça" , "banana" , "laranja"]
frutas.shift()
console.log(frutas)
////////////////////////////////////////////
// Propriedades ou Método pop(): Remove do final ( o ultimo elemento do array)
let peixes = ["palhaço" , "mandarim" , "esturjão"]
peixes.pop()
console.log(peixes)
///////////////////////////////////////////
// Propriedades ou Método splice(i,n): remove n elementos á partir da posição i do array
let letras = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H"]
//indices (i)  0     1     2     3     4     5     6     7

console.log("Array completa" , letras)

// Aplicando o método seplice(i,n) 
// Da array letras, na posição 2 ("C") remove 1 elemnto (o prorprio "C")
let letrasSemUmElemento = letras.slice(2,1)
console.log("Elementos retirados da Array letras com splice(2,1):   ", letrasSemUmElemento)

console.log( "Array letras ficou asssim: ", letras)

// Da array letras, na posição 3 ("D") remove 2("E" e "F")
let letrasSemUmElementos = letras.splice(3,2)
console.log("Elementos retirados da Array letras com splice(3,2):     ", letrasSemUmElementos)

console.log( "Array letras ficou assim:", letras)