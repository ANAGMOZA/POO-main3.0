function mayorMenor() {
    let numeroMayor = [];
    let numero = 0;

    for (let i = 0; i < 5; i++) {
      numero = parseFloat(prompt("Ingrese un numero " + (i + 1) + ":"));

      if (numero > numeroMayor) {
        numeroMayor = numero;
      }
    }

    document.getElementById(`lista`).innerHTML = `<p>El numero mayor es:</p> <br><h2>${numeroMayor}</h2>`;
}