let filme ={
    dadosDireção: ["Chris Columbus", "Alfonso Cuaron", "Mike Newll", "David Yates"],
    nome: "Harry Potter",
    ano: 2001,
    elenco: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint", "Tom Felton","Helena Boham Carter"],
    olhouOFilme: true
}
console.log("Diretores dos filmes: ", filme.dadosDireção)
console.log("Nome do filme: ", filme.nome)
console.log("Ano de lançamento: ", filme.ano)
console.log("Elenco do filme: ", filme["elenco"])
console.log("Voce ja olhou o filme? ", filme["olhouOFilme"])