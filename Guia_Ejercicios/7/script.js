function encontrarImpares() {
    let impares = []
    for(let i = 1; i < 100; i+=2) { 
    impares.push(i)
    }
    return impares;
 }
 
 console.log(`Los primeros 100 numeros impares son: ${encontrarImpares()}`)