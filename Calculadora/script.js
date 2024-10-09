let inputActual = ''; // Almacena el número que el usuario está ingresando actualmente
let inputAnterior = ''; // Almacena el número anterior (primer operando) antes de realizar una operación
let operacionSeleccionada = ''; // Almacena la operación matemática seleccionada

// Función que se llama cuando el usuario presiona un botón numérico
function presionarNumero(num) {
    // Limitar la entrada a 10 dígitos
    if (inputActual.length < 10) {
        inputActual += num.toString(); // Agrega el número presionado al inputActual
        actualizarPantalla(); // Actualiza la pantalla para mostrar el número actual
    }
}

// Función que se llama cuando el usuario selecciona una operación matemática
function establecerOperacion(op) {
    if (inputActual === '') return; // No hacer nada si no hay un número ingresado
    if (inputAnterior !== '') calcular(); // Si ya hay un número anterior, realiza el cálculo
    operacionSeleccionada = op; // Guarda la operación seleccionada
    inputAnterior = inputActual; // Guarda el número actual como anterior
    inputActual = ''; // Limpia el inputActual para ingresar un nuevo número
}

// Función para calcular el resultado basado en los números y la operación seleccionada
function calcular() {
    let resultado; // Variable para almacenar el resultado del cálculo
    const anterior = parseFloat(inputAnterior); // Convierte inputAnterior a un número flotante
    const actual = parseFloat(inputActual); // Convierte inputActual a un número flotante

    if (isNaN(anterior) || isNaN(actual)) return; // Verifica si alguno de los valores no es un número

    // Realiza la operación correspondiente según la operación seleccionada
    switch (operacionSeleccionada) {
        case '+':
            resultado = anterior + actual; // Suma
            break;
        case '-':
            resultado = anterior - actual; // Resta
            break;
        case '*':
            resultado = anterior * actual; // Multiplicación
            break;
        case '/':
            resultado = anterior / actual; // División
            break;
        default:
            return; // Si no hay una operación válida, termina la función
    }

    inputActual = resultado.toString(); // Almacena el resultado en inputActual como cadena
    operacionSeleccionada = ''; // Limpia la operación seleccionada
    inputAnterior = ''; // Limpia el número anterior
    actualizarPantalla(); // Actualiza la pantalla para mostrar el resultado
}

// Función para limpiar todos los valores y reiniciar la calculadora
function limpiar() {
    inputActual = ''; // Reinicia inputActual a vacío
    inputAnterior = ''; // Reinicia inputAnterior a vacío
    operacionSeleccionada = ''; // Reinicia operacionSeleccionada a vacío
    actualizarPantalla(); // Actualiza la pantalla para reflejar estos cambios
}

// Función para actualizar la interfaz de usuario y mostrar el valor actual en la pantalla de la calculadora
function actualizarPantalla() {
    document.getElementById('display').innerText = inputActual || '0'; // Muestra inputActual o '0' si está vacío
}