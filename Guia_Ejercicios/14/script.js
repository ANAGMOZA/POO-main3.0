let numero = parseInt(prompt("Indicar cantidad de primeros pares: "));
function imprimirPares(limite){
    pares = [];
    sumar = 0;
    for(let i = 1; i <= limite; i+=2){
        pares.push(i);
    }
    for(let i = 0; i < pares.length; i++){
        sumar += pares[i];
    }
    console.log(pares.join(" - "));
    return sumar;
}
console.log(`Resultado de suma es: ${imprimirPares(numero)}`);