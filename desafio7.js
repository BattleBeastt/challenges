let operacion = prompt("elige la operacion a realizar: \n suma\n resta\n multiplicacion\n division\n salir");
let valorUno = Math.floor(prompt("ingresa un valor: "));
let valorDos = Math.floor(prompt("ingresa un valor: "));
let total = 0;

while(operacion == "suma"  || operacion == "resta" || operacion == "multiplicacion" || operacion =="division" || operacion === "salir"){
		//en caso de que el valor de "operacion" no sea valido//
		if(operacion === "salir"){
			break;
		}
	switch(operacion == "suma" || operacion == "resta" || operacion == "multiplicacion" || operacion == "division"){
		case "suma":
			suma(valorUno, valorDos);
			break;
		case "resta":
			resta(valorUno, valorDos);
			break;
		case "multiplicacion":
			multiplicacion(valorUno, valorDos);
			break;
		case "division":
			division(valorUno, valorDos);
			break;
		default:
			alert("operacion no reconocida");
	}
	operacion = prompt("elige la operacion a realizar: \n suma\n resta\n multiplicacion\n division\n salir");
}
function suma(valor1, valor2){
	total = valor1 + valor2;
	return total;
}
function resta(valor1, valor2){
	total = valor1 - valor2;
	return total;
}
function multiplicacion(valor1, valor2){
	total = valor1 * valor2;
	return total;
}
function division(valor1, valor2){
	total = valor1 / valor2;
	return total;
}

alert(`tu respuesta es: ${total}`);