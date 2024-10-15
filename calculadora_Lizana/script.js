let operacion = ""; // Almacena la operación en curso (números y operadores introducidos por el usuario)

// Función para agregar números a la pantalla
function numeros(numero) {  
    const pantalla = document.getElementById("pantalla");
    if (pantalla.innerHTML === "0") {
        pantalla.innerHTML = numero; 
    } else {
        pantalla.innerHTML += numero; 
    }
    operacion += numero;
}

// Función para agregar operadores
function operadores(operador) {
    const pantalla = document.getElementById("pantalla");
    if (operacion !== "") { 
        pantalla.innerHTML += " " + operador + " ";
        operacion += operador; 
    }
}

// Función para calcular el resultado
function calculo() {
    const pantalla = document.getElementById("pantalla");
    
    // Verifica si la operación contiene solo números y operadores válidos (usando una expresión regular)
    if (/^[0-9+\-*/\s]+$/.test(operacion)) {
        const resultado = eval(operacion); 
        pantalla.innerHTML = resultado !== undefined ? resultado : 0;
        operacion = resultado;
    } else {
        pantalla.innerHTML = "Error";
        operacion = "";
    }
}

// Función para borrar la operación y reiniciar la calculadora
function borrar() {
    document.getElementById("pantalla").innerHTML = "0";
    operacion = "";
}