console.log("vinculo")

function identificaMayorMenor()
{
    let resultado =""
    let num1 = prompt("Agregue el primer numero:")
    let num2 = prompt("Agregue el segundo numero: ")
    if(num1 > num2){
        resultado = ` El primer numero es mayor: ${num1} - El segundo es menor: ${num2}`
    }else{
        resultado = ` El segundo numero es mayor: ${num2} - El primero es menor: ${num1}`
    }
    document.getElementById(`lista`).innerHTML = resultado;
}