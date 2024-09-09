    let nombre = prompt("Ingrese su nombre por favor: ");
    let apellido = prompt("Ingrese su apellido por favor: ");
    let edad = parseInt(prompt("Ingrese su edad Por favor: "));

    function mostrarDatos() {
        
    console.log("\nLos datos que ingresaste son:");
    console.log(`Nombre: ${nombre}`);
    console.log(`Apellido: ${apellido}`);
    console.log(`Edad: ${edad}`);
}
  
mostrarDatos(nombre, apellido, edad)