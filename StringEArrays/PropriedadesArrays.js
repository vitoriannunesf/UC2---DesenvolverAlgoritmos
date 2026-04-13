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