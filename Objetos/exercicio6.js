let celular = {
    marca: "Samsung",
    modelo: "S23",
    armazenamento: "256 GB",

    ligar: function(){
        console.log("O celular esta ligado!")
    },
    foto: function(){
        console.log("Clique! Foto tirada!")
    },
}
console.log(celular.marca)
console.log(celular.modelo)
console.log(celular.armazenamento)

celular.ligar()
celular.foto()