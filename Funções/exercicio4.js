function converterCelsius(fahrenheit){
    const celsius = (fahrenheit - 32) * 5/9
    console.log( `${fahrenheit} °F equilave a ${celsius.toFixed(1)} °C`)
}

converterCelsius(98.3)