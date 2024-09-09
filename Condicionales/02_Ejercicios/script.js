console.log("vinculado")
function identificarTemperatura()
{
    let mensaje ="";
    let temperatura = prompt("Indique la temperatura actual")

    if (temperatura < 0) {
        mensaje = `Hace frio actualmente. Temperatura actual: <h2>${temperatura}°</h2>`
    }else if (temperatura > 0 && temperatura <= 25) {
            mensaje = `La temperatura es agradable. Temperatura actual <h2>${temperatura}°</h2>`
    } else if (temperatura >= 25) {
        mensaje = `Hace calor actualmente. Temperatura actual <h2>${temperatura}°</h2>`
    } else{
        mensaje = `Ingrese un valor correcto`;
    }
    document.getElementById(`lista`).innerHTML = mensaje;
}