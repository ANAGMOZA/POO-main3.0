let operacion = ""; // Almacena la operación en curso (números y operadores introducidos por el usuario)

// Función para agregar números a la pantalla
function numeros(numero) {  
    const pantalla = document.getElementById("pantalla"); // Obtiene el elemento HTML donde se muestra la operación
    if (pantalla.innerHTML === "0") { // Si la pantalla muestra "0" (estado inicial), reemplaza el "0" por el número ingresado
        pantalla.innerHTML = numero; // Cambia el contenido de la pantalla al número ingresado
    } else { // Si ya hay otros números en la pantalla
        pantalla.innerHTML += numero; // Añade el número ingresado al final del contenido actual de la pantalla
    }
    operacion += numero; // También añade el número ingresado a la variable 'operacion' para guardar la operación completa
}

// Función para agregar operadores
function operadores(operador) {
    const pantalla = document.getElementById("pantalla"); // Obtiene el elemento de la pantalla
    if (operacion !== "") { // Si hay una operación en curso (es decir, no está vacía)
        pantalla.innerHTML += " " + operador + " "; // Añade el operador con espacios a la pantalla para que se vea más claro
        operacion += operador; // Añade el operador a la variable 'operacion' para actualizar la operación
    }
}

// Función para calcular el resultado
function calculo() {
    const pantalla = document.getElementById("pantalla"); // Obtiene el elemento de la pantalla
    
    // Verifica si la operación contiene solo números y operadores válidos (usando una expresión regular)
    if (/^[0-9+\-*/\s]+$/.test(operacion)) {
        const resultado = eval(operacion); // Evalúa la operación como una expresión matemática
        pantalla.innerHTML = resultado !== undefined ? resultado : 0; // Si el resultado es válido, lo muestra; si no, muestra "0"
        operacion = resultado; // Actualiza 'operacion' con el resultado, para permitir continuar calculando con este
    } else {
        pantalla.innerHTML = "Error"; // Si la operación contiene caracteres inválidos, muestra "Error"
        operacion = ""; // Reinicia la variable 'operacion'
    }
}

// Función para borrar la operación y reiniciar la calculadora
function borrar() {
    document.getElementById("pantalla").innerHTML = "0"; // Resetea la pantalla a "0"
    operacion = ""; // Limpia la operación actual, reiniciando el estado de la calculadora
}