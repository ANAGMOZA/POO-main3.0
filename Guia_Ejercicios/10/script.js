let num1 = prompt("Ingrese 1er numero: ")
let num2 = prompt("Ingrese 2do numero: ")

function operacionesNumericas(num1,num2){
   let desicion = prompt("¿Que desea hacer? 1 - 2 - 3 - 4\n1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir")
   switch (desicion) {
    case '1':
        let suma = num1 + num2;
        console.log(`Las suma de los numeros es: ${suma}`);
        break;
    case '2':
        let resta = num1 - num2;
        console.log(`La resta de los numeros es: ${resta}`);
        break;
    case '3':
        let mult = num1 * num2;
        console.log(`La muliplicacion de los numeros es: ${mult}`);
        break;
    case '4':
        let div = num1 / num2;
        console.log(`La division de los numeros es: ${div}`);
        break;
    default:
        console.log(`Error, intente otra vez. `)
        break;
   }
}

operacionesNumericas(num1, num2);
