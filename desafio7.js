let operacion = prompt("elige cuál operacion realizar: \n suma\n resta\n multiplicacion\n division\n salir");
let valorUno = 0;
let valorDos = 0;
let total = 0;

if(operacion != "suma" && operacion != "resta" && operacion != "multiplicacion" && operacion != "division" && operacion != "salir"){
			alert("operacion no reconocida");
			operacion = prompt("elige la operacion a realizar: \n suma\n resta\n multiplicacion\n division\n salir");
		}
while(operacion === "suma"  || operacion === "resta" || operacion === "multiplicacion" || operacion ==="division" || operacion === "salir"){
		//en caso de que el valor de "operacion" no sea valido//
		if(operacion === "salir"){
			alert("!!hasta la próxima¡¡");
			break;
		}
		//el usuario elegio una operacion matematica//
		valorUno = Math.floor(prompt("ingresa un valor: "));
		valorDos = Math.floor(prompt("ingresa un valor: "));
		//el interprete decidirá que operación ejecutar de acuerdo a lo que el usuario eligio//
	switch(operacion){
		case 'suma':
			suma(valorUno, valorDos);
			break;
		case 'resta':
			resta(valorUno, valorDos);
			break;
		case 'multiplicacion':
			multiplicacion(valorUno, valorDos);
			break;
		case 'division':
			division(valorUno, valorDos);
			break;
		default:
			alert("operacion no reconocida");
	}
	alert(`el resultado es: ${total}`);
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