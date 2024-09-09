function sumaNumeros(){
    let count = 1;
    let suma = 0;
    let array = [];
    
    while (count <= 10) {
        array.push(count)
        suma += count;
        count ++;
    }
    
    document.getElementById(`lista`).innerHTML = `La suma total de: ${array.join("+")}\n<h2>${suma}</h2>`;
}