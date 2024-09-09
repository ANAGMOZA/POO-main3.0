function encontrarPares() {
   let pares = []
   for(let i = 2; i < 100; i+=2) { 
   pares.push(i)
   }
   return pares;
}

console.log(`Los primeros 100 numeros pares son: ${encontrarPares()}`)