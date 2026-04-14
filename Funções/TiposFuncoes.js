// Funções:
// Uma função é um bloco de código qeu executa uma tarefa específica.
// Recebe algo(entrada ou parâmetros)
// Processa algo
// Entrega um resulatado (saída ou retorno)

//-------------------------------------------
// 1. Função Declarada (padrão/sem parâmetro)
// Declarando a função
function imprimirOlaMundo(){
    console.log("Olá mundo!") // ação da função
}

// Chamada da função para executar 
imprimirOlaMundo()

//------------------------------------------
// 2. Função com parâmetros
// Podemos passar informações para a função. Essas informações são os parâmetros que ela vai precisar para executar sua tarefa

//------------------------------------------
// Função que soma dois números:
function somar(a,b){
    return a + b
}
// Chamada da função:
let resultado = somar(5,3)
console.log(resultado)