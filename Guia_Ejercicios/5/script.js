let n = parseInt(prompt(`Ingrese un numero: `));

function sumarN(numero) {
    let array = [];
    let suma = 0;
    for ( let i = 1; i <= numero; i++){
      array.push(i);
      suma += i;
    }
    console.log(`los numeros naturales son ${array.join(" - ")}`);
    return suma;
}

console.log(`la suma es: ${sumarN(n)}`)
