function numerosCrecientes(){
    let numero = 0;
    let array = [];
    
    while (numero <= 100){
        array.push(numero);
        numero += 5;
    }
    document.getElementById(`lista`).innerHTML = `<p>Números Creciendo de 5 en 5 hasta el 100:</p> <br><h2>${array}</h2>`
}