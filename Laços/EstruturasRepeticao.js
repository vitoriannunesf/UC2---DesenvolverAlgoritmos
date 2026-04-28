// ESTRUTURAS DE REPETIÇÃO (LOOPS OU LAÇOS)
//---------------------------------------------------------------------------------------------------
// Definição: Permitem executar um bloco de código várias vezes enquanto uma condição fro verdadeira
//---------------------------------------------------------------------------------------------------
// WHILE (Enquanto) 

/* COMEÇO DO COMENTARIOO-----------------------------------------------------------------------------
// Exemplo:

let i = 0 
while(i < 10){
     console.log(i)
     i++
}


// Exemplo 2: Livia comendo coxinha
let estomago = 0
while( estomago < 8){
    console.log(" Livia quer mais coxinha ")
    estomago ++
}

// Exemplo 3: Corbucci vai comer 100 coxinhas
let estomagoCorbucci = 0

while( estomagoCorbucci < 100){
    console.log(" CONSIGO COMER MAIS COXINHA")
    estomagoCorbucci = estomagoCorbucci + 10
}

// WHILE (DECREMENTAR)
// Exemplo 4: Lançamento de foguete
// Contagem regressiva...

let contador = 10 // começamos em 10
while(contador >= 0){
    console.log(contador)
    contador --

}

// PERCORRENDO ARRAYS COM WHILE

// Criamos um array chamado "alunos"
let alunos = ["Robersvaldo" , "Greyck" , "AntoniNunes" , "Dieberson"]
// Criamos uma variavel de controle chamada "i"
// Essa variavel vai representar a posição atual do array e começa na posição 0
let i = 0
// Começamos um loop ou laço "while" qeu vai se repetir enquanto a condição for verdadeira
// A condição é: "i < alunos.lenght"
// "alunos.lenght" retorna o tamanho da array
// emtão enquanto "i" for menos qua o numero de alunos, o loop continua
while( i < alunos.length){
    // Dentro do loop, mostramos no console o aluno na posição atual
    // "alunos[i]" acessa o elemento do array na posição "i"
    console.log(alunos[i])
    i++
}

//==================================================================================================
// FOR (PARA)
//==================================================================================================
for(let i  = 0; i < 5; i++){
    console.log("Repetição numeros ", i)
}
// Explicando: 
// let i = 0  -> valor inicial
// i < 5 -> condição ( enquanto for verdadeira, repete )
// i++ -> incremento ( aumenta 1 a cda volta )
FECHO COMENTARIO-----------------------------------------------------------------------------------*/

//--------------------------------------------------------------
// FOR (PARA) - Com condicionais
// Verificando numeros pares e se tem multiplo de 5 

// Loop de 0 a 100
for(let i = 0; i <= 100; i++){
    // Verificando se o numero é par ou impar (condicionais)
    if(i % 2 === 0){ // verifico se o i do laço fro que esta no momento é par
        console.log(i + " é par")
    }else{
        console.log(i + " é impar")
    }

    // Destaca numeros multipos de 5 (exceto 0)
    if( i !== 0 && i % 5 === 0){
        console.log("-> " + i + " é multiplo de 5")
    }
        
}