let listaDeCompra = [];
let lacteos = [];
let embutidos = [];
let frutas = [];
let verduras = [];
let carnes = []
let categoria = "";

let pregunta1 = prompt("¿deseas agregar un alimento a tu lista de compras?\n" + "si\n" + "no");

while(pregunta1 != "no"){
	
	while(pregunta1 != "si" && pregunta1 != "no"){
		alert("operacion no reconocida");
	}
	if(pregunta1 === "no"){
		break;
	}
	let pregunta2 = listaDeCompra.push(prompt("¿que alimento deseas agregar?"));
	let pregunta3 = prompt("¿a qué categoria pertenence ese alimento?");
	if(pregunta3 == "lacteos"){
		lacteos.push(pregunta2);
	}
	
	
	pregunta1 = prompt("¿deseas agregar un alimento a tu lista de compras?\n" + "si\n" + "no");
}

console.log(listaDeCompra);
console.log("lista de compras: " + lacteos);