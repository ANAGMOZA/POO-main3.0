let suma = 0;

function calcularPromedio(){ 
for (let i = 1; i <= 5; i++) {
  let numero = parseFloat(prompt(`Ingrese el número que desea calcular ${i}:`));
  suma += numero;
}

let promedio = suma / 5;

console.log(`El promedio de los números ingresados es: ${promedio}`);
}

calcularPromedio(suma, numero, promedio)