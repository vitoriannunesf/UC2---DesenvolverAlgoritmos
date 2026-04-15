function converter(valor){
    const dolar = valor * 0.20
    const bolivar = valor * 95.5
    const euro = valor * 0.17

    console.log("Dolar: ", dolar)
    console.log("Bolivar: ", bolivar)
    console.log("Euro: ", euro)
}

converter(100)