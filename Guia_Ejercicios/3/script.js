
let num1 = prompt("Ingrese el primer numero: ")
let num2 = prompt("Ingrese el segundo numero: ")

function compararNum(){
if (num1 < num2){
    console.log('El orden de los numero es decreciente')
} else if (num1 > num2 ){
    console.log('El orden de los numeros es creciente')
} else {
    console.log('Los numeros son iguales')
}
}
compararNum(num1, num2)