let usuarioBase = {
    nome: "Ana", 
    idade: 25,
    email: "ana@email.com" 
}
let endereco = {cidade: "Sâo Paulo", estado: "SP", cep: "01000-000"}

let usuarioCompleto = {
    ...usuarioBase, ...endereco, telefone: 11999999999
}
console.log(usuarioCompleto)
