// Importa a biblioteca
const prompt = require('prompt-sync')({sigint: true})
// Função simples para cumprimentar o usuario
function cumprimentarUsuario(){
    // Pede o nome do usuario
    const nome = prompt('Digite seu nome cara:')

    // Mostra uma saudação personalizada
    console.log(`Olá, ${nome}! Seja bem-vindo(a) a turma TDS261T `)
}
// Chamada da função
cumprimentarUsuario()