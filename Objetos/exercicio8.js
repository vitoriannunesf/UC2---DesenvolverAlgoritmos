let jogo = {
    nome: "minecraft",
    plataforma: "Computador e celular",
    lancamento: 2009,

    jogar: function(){
        console.log("Voce começou a jogar!")
    },
    
    resumir: function(){
        console.log("O jogo ", jogo.nome, " foi lançado em ", jogo.lancamento, " para ", jogo.plataforma)
    }
}
jogo.jogar()
jogo.resumir()