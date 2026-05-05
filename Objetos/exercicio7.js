let cachorro = {
    nome: "Luna",
    idade: 6,
    raca: "vira-lata",

    latir: function(){
        console.log("AU AU AU AU AU")
    },
    correr: function(){
        console.log("O cachorro esta correndo!")
    }
}
console.log(cachorro.nome)
console.log(cachorro.idade)
console.log(cachorro.raca)

cachorro.latir()
cachorro.correr()