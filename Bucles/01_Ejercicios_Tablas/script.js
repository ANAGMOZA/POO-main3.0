function generarTabla() {
	var numero = document.getElementById('numero').value;
	var resultado = document.getElementById('resultado');

	if (isNaN(numero)) {
		resultado.innerHTML = "Debes ingresar un número.";
		return;
	}

	var tabla = "<table border='1'><tr><th>Número</th><th>Multiplicación</th></tr>";
	for (var i = 1; i <= 10; i++) {
		tabla += "<tr><td>" + i + "</td><td>" + (i * numero) + "</td></tr>";
	}
	tabla += "</table>";

	resultado.innerHTML = tabla;
}