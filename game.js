let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible);
let numeroUsuario = 0;
let maximoIntentos = 3;
	
		
while (numeroUsuario != numeroSecreto){
	numeroUsuario = parseInt(prompt(`indica un numero del 0 al ${numeroMaximoPosible}`));
	maximoIntentos-- ;
		//el usuario acertó//
	if (numeroUsuario == numeroSecreto){
		alert(`¡¡felicidades acertaste!! el numero secreto es: ${numeroSecreto}!!`);
	} else {
			if (numeroUsuario > numeroSecreto){
				alert(`el numero secreto es menor, te quedan ${maximoIntentos} ${maximoIntentos == 1 ? 'intento' : 'intentos'}!!`);
		} else {
				alert(`el numero secreto es mayor, te quedan ${maximoIntentos} ${maximoIntentos == 1 ? 'intento' : 'intentos'}!!`);
			}
		//disminuye el contador cuando la persona no acierta//
		//maximoIntentos = maximoIntentos - 1;
		//maximoIntentos -= 1;
		
		if (maximoIntentos == 0){
			alert("llegaste al numero maximo de intentos");
			break;
		}
	console.log(`el numero secreto es: ${numeroSecreto}`);
	}
}