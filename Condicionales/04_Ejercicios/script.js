function IdentificadorVariable(){
  let resu1 ="";
  let numero = parseFloat(prompt("Ingrese un numero"));

  if (numero > 0){
    resu1 = `El numero <h2>${numero}</h2> es positivo`;
  
  } else if (numero < 0){
    resu1 = `El numero <h2>${numero}</h2> es negativo`;
  } else if ( numero == 0){
    resu1 = `El numero <h2>${numero}</h2> es igual a cero`;
  } else {
    resu1 = `Ingrese un valor valido`;
  }
  document.getElementById(`lista`).innerHTML = resu1;
} 