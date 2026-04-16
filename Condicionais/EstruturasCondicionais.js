// ESTRUTURAS CONDICIONAIS EM JAVASCRIPT
//------------------------------------------
// Definição: Permitem executar codigos diferentes dependendo de certas condições
//------------------------------------------

// IF (Se)

let idade = 18
if (idade >= 18 ){
   console.log("Você é maior de idade. ")
} 

// O codigo dentro do bloco {} ao sera executado se a condição for verdadeira
//----------------------------------------------------------------------------
// ELSE (Senão)

let idade2 = 16
if(idade2 >= 18){
    console.log("Você é maior de idade.")
}else{
    console.log("Você é menor de idade parça.")
}
// O else é executado apenas quando a condição do if é falsa
//-----------------------------------------------------------
// ELSE IF (Senão se)
let nota = 75
if(nota >= 90){
    console.log("Parabens voce nao é um cavalo, e tirou A. ")

}else if(nota >= 70){
    console.log("Voce tirou B. ")

}else if(nota >= 50){
    console.log("Voce tirou C.")

}else{
    console.log("Voce reprovou. ")
}
//------------------------------------------------------------
// OPERADORES LOGICOS
// Podemos combinar consições usando operadores
// && -> E
// || -> OU
// ! -> NÃO

let idade3 = 20
let temCarteira = true

if(idade3 >= 18 && temCarteira){
    console.log("Pode dirigir!!")

}else console.log("No puede")