//========================================================
// OBJETOS
//========================================================
// Definição:
// Um objeto é uma coleção de "chaves" e "valores" (propriedades). 
// É uma forma de organizar informações relacionadas dentro de uma unica variavel.

// Exemplo basico de objeto:
let pessoa = {
    nome: "Romario",
    idade: 56,
    profissao: "Corredor",
    gostaCoxinha: false,
    cidade: "São Leopoldo",
    hobbies: ["correr", "escrever", "criticar a sociedade da coxinha"]
}
console.log(pessoa)

//======================================================================
// ACESSANDO PROPRIEDADES DE UM OBJETO
//======================================================================

// Podemos acessar os valores de duas formas:
// 1. Usando a notação de ponto: 
console.log("Nome da pessoa: ", pessoa.nome )
console.log("Idade da pessoa: ", pessoa.idade )
// 2. Usando colchetes:
console.log("Cidade da pessoa: ", pessoa["cidade"])
//=======================================================================
// ADICIONANDO OU ALTERANDO PROPRIEDADES

// Alternando uma propriedade ja existente:
pessoa.profissao = "Desenvolvedor de Sistemas"
console.log("Objeto atualizado! Romario nao é mais corredor, ele agora é ", pessoa.profissao)
// Adicionando uma nova propriedade:
pessoa.time = "Brasil"
console.log("Objeto atualizado! Nova propriedades time adicionada. No caso o time é: ", pessoa.time)

// ====================================================================================================
// Metodos em objetos

// Objetos podem ter funções como propriedades, só que dai chamamos de metodos.
let carro = {
    marca: "Porsche",
    modelo: 911,
    ano: 2023,
    // metodo acelerar
    acelerar: function(){
        console.log("O carro esta acelerando! vrum vrum")
    },
    // metodo buzinar
    buzinar: function(){
        console.log("bibibibibibibi")
    }
}
console.log(carro.marca)
carro.acelerar()
carro.buzinar()
//==================================================================
//  Acessando objetos dentro de objetos {{}}
let donoDoPet = {
    nome: "Greg",
    pet:{
        nomeDoPet: "Luna",
        raca: "pretinha",
        idade: 1
    }
}
console.log(donoDoPet.pet.nomeDoPet)
console.log(donoDoPet)
console.log(donoDoPet.pet.raca)
console.log(donoDoPet.pet.idade)