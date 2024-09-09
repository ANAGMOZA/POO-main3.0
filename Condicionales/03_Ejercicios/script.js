function IdentificadorUsuario(){
  
let mensaje = "";
const nombreUsuario = "usuario123";
const contraseña = "secreto";

let userInputUsername = prompt("Introduzca su nombre de usuario:");
let userInputPassword = prompt("Introduzca su contraseña:");

if (userInputUsername === nombreUsuario && userInputPassword === contraseña) {
  mensaje = `Acceso concedido`;
} else {
  mensaje = `Acceso denegado`;
}
document.getElementById(`lista`).innerHTML = mensaje;
}
