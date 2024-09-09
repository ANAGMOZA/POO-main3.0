function imprimirM3(limite){
    array = [];
    mult3 = [];
    sumar = 0;
    for(let i = 1; i <= limite; i++){
        let input = parseInt(prompt(`Ingrese valor ${i} de ${limite}`));
        if(input <= 0){
            alert("Ingrese un valor sobre 0!!");
            return console.log("Error!");
        }else if (input > 0){
            array.push(input);
        } else{
            alert("Ingrese un valor numerico!!");
            return console.log("Error!");
        }
    }
    for(let i = 0; i < array.length; i++){
        
    }
}