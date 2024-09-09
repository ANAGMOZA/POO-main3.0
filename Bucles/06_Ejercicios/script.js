function sumarCalificaciones(){
let sumaCalificaciones = 0;

for (let i = 0; i < 5; i++) {
    let calificacion = parseFloat(prompt(`Ingrese la calificación ${i + 1}:`));
    sumaCalificaciones += calificacion;
}
let promedio = sumaCalificaciones / 5;
document.getElementById(`lista`).innerHTML = `El promedio de las calificaciones es: ${promedio}`;
}