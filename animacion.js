/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
let areaTexto = document.querySelector(".texto-cifrado");
let mensajeSecreto = document.querySelector(".mensaje");

//boton para encriptar el texto//
function btoEncriptar(){
			const encriptarTexto = encriptar(areaTexto.value);
			mensajeSecreto.value = encriptarTexto;
			areaTexto.value = " "; 
			hiddenIMG();				
}	

//funcion encriptadora de texto//
function encriptar(areaString){
			let vocalesCifradas = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
			areaString = areaString.toLowerCase();
			
			for(let i = 0; i < vocalesCifradas.length; i++){
				if(areaString.includes(vocalesCifradas[i][0])){
					areaString = areaString.replaceAll(vocalesCifradas[i][0], vocalesCifradas[i][1]);
				}
			}
			return areaString;
}

//funcion para esconder la imagen de muestra//
function hiddenIMG(){
	document.getElementById("img-buscando").style.visibility = "hidden";
	document.getElementById("img-mensaje").style.visibility = "hidden";
}

//boton de desencriptar//
function btoDesencriptar(){
			const desencriptarTexto = desencriptar(areaTexto.value);
			mensajeSecreto.value = desencriptarTexto;
			areaTexto.value = " "; 
			hiddenIMG();				
}	
//funcion para desencriptar el mensaje cifrado//
function desencriptar(mensaje){
		let mensajeCifrado = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
		mensaje = mensaje.toLowerCase();
		
		for(let i = 0; i < mensajeCifrado.length; i++){
			if(mensaje.includes(mensajeCifrado[i][1])){
				mensaje = mensaje.replaceAll(mensajeCifrado[i][1], mensajeCifrado[i][0]);
			}
		}
	return mensaje;
}

//funcion para copiar el texto del mensajeSecreto//
function btoCopiar(){
	let texto = document.getElementById('miTexto');
	
		if(mensajeSecreto){
			navigator.clipboard.writeText(mensajeSecreto.value);
			texto.textContent = '!!Contenido copiado¡¡'
		} else{
				console.log('Error al copiar: ');
				}
		mensajeSecreto.value = " ";
}