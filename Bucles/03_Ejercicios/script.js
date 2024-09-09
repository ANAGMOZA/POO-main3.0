function primerosDiezPares() {
let contador = 2 
let array =[]
while (contador <= 20){
    array.push(contador)
    contador += 2
    }
    document.getElementById(`lista`).innerHTML = `<h2>Primeros 10 numeros pares: <br>${array}</h2>`
}