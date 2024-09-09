let n = parseInt(prompt("Indicar cantidad de numeros a ingresar: "));

function sumarPares(limite){
    let suma = 0;
    array = [];
    for(let i = 1; i <= limite; i++){
        let input = parseInt(prompt(`Ingrese ${i}° par: `));
        array.push(input);
    }
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            suma +=array[i];
        }
    }
    return suma;
}

console.log(`Resultado de suma de pares es: ${sumarPares(n)}`);