const idade = 44 // idade da pessoa
const temAssinatura = false // indica se a pessoa tem assinatura ativa

// Verificando se a pessoa pode acessar:
// Condições: 
// - Precisa ser maior ou ihgual a 18 anos ( >= 18 )
// E - &&
// - Tem que ter assinatura ( truen )

const podeAcessar = idade >= 18 && temAssinatura
console.log(podeAcessar)