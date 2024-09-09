let numero = parseInt(prompt("Indique la cantidad de numeros a ingresar: "))

function sumarNumeros(param) {
    let suma = 0;
    let array =[];
    let input = 0;
    for (let i = 0; i < param; i++) {
        input = parseInt(prompt(`Ingresa número: `));
        suma += input;
        array.push(input);
    }
    console.log(`Valores: ${array.join(" + ")} = `)
    return suma;
}
sumarNumeros();
console.log(`Total: ${sumarNumeros(numero)}`);
