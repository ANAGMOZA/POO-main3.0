function encontrarNumerosPares() {
    let n = parseFloat(prompt("Ingrese la cantidad de números pares a encontrar"));
    let numerosPares = [];
    for (let i = 1; i <= n; i++) {
        numerosPares.push(i*2);
    }
    document.getElementById('lista').innerHTML = `<p>Los primeros ${n} números pares son:</p> <br><h2>${numerosPares}</h2>`;
}