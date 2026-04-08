const ataque = "    kamehameha, genki-dama, kaioken, spirit bomb          "
console.log(ataque.trim())

const ataque2 = "kamehameha, genki-dama , kaioken , spirit bomb"
const fraseMaiuscula = ataque2.toUpperCase()
console.log(fraseMaiuscula)

const ataque3 = "kamehameha, genki-dama, kaioken, spirit bomb"
const novaFrase = ataque3.replaceAll("," , "|")
console.log(novaFrase)

const ataque4 = "kamehameha, genki-dama, kaioken, spirit bomb"
console.log(ataque4.includes("spirit bomb"))

const ataque5 = "kamehameha, genki-dama, kaioken, spirit bomb"
console.log(ataque5.length)