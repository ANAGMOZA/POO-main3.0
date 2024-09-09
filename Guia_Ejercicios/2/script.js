let numero = parseFloat(prompt("Ingrese el numero que desea modificar"));

function operar(num){
    return (num / 3 + 10) * 2;
}

console.log(`El resultado es: ${operar(numero)}`);