function valorPuntuaciones() {
    let puntuacion = parseFloat(prompt("Ingrese la puntuación:"));
    let mensaje ="";
    
    if (puntuacion >= 90) {
        mensaje = `Excelente - ${puntuacion}`;
    } else if (puntuacion >= 70 && puntuacion <= 89) {
        mensaje = `Buen trabajo - ${puntuacion}`;
    } else if (puntuacion < 70){
        mensaje = `Necesitas mejorar - ${puntuacion}`;
    } else{
        mensaje = `Ingrese un valor valido`;
    }
    document.getElementById(`lista`).innerHTML = mensaje;
}