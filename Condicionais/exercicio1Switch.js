let plano = "vip"

switch(plano){

    case "basic":
        console.log("Você tem um plano basic: Qualidade sd e propaganda")
        break
    case "premium":
        console.log("Você tem um plano premium: Qualidade full hd")
        break
    case "vip":
        console.log("Você tem um plano vip: Qualidade 4k e conteudo exclusivo")
        break
        default:
            console.log("Plano invalido")
}