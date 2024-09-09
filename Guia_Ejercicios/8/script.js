let suma = 0;

function sumarNumeros() {
    for (let i = 1; i <= 5; i++) {
        let numero = parseInt(prompt(`Ingrese el número ${i}:`));
        suma += numero;
        console.log(`Valores ingresados ${i}: ${numero}`);
    }
}

sumarNumeros();
console.log(`La suma de los 5 números es: ${suma}`);
