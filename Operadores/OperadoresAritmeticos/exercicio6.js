let pizza = 40
let qntPizza = 3

let refri = 12
let qntRefri = 2

let total = (pizza * qntPizza) + (refri * qntRefri)

let desconto = total * 0.10
let totalComDesconto = total - desconto

let porPessoa = totalComDesconto / 3

console.log(porPessoa.toFixed(2))

//tofixed(2) -- arredonda as casas decimais