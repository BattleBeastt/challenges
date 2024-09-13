let listaDeCompra = [];
let lacteos = [];
let embutidos = [];
let frutas = [];
let verduras = [];
let carnes = [];
let categoria = "";
let eliminados = "";
let pregunta1 = "si";//el programa inicia con la declaración en "si" para ejecutar el ingreso del alimento//

while(pregunta1 != "no"){
	while(pregunta1 != "si" && pregunta1 != "no"){
		alert("operacion no reconocida");
		pregunta1 = prompt("¿deseas agregar un alimento a tu lista de compras?\n" + "si/no");
	}
	if(pregunta1 === "no"){
		break;
	}
	listaDeCompra = prompt("¿que alimento deseas agregar?");
	categoria = prompt("¿a qué categoria pertenence ese alimento?");
	if(categoria == "lacteos"){
		lacteos.push(listaDeCompra);
	} else if(categoria == "embutidos"){
		embutidos.push(listaDeCompra);
	} else if(categoria == "frutas"){
		frutas.push(listaDeCompra);
	} else if(categoria == "verduras"){
		verduras.push(listaDeCompra);
	} else if(categoria == "carnes"){
		carnes.push(listaDeCompra);
	} else{
		alert("categoria no reconocida");
	}	
	pregunta1 = prompt("¿deseas agregar un alimento a tu lista de compras?\n" + "si/no");
}

console.log(`lista de compras:\n lacteos:${lacteos}\n embutidos:${embutidos}\n frutas:${frutas}\n verduras:${verduras}\n carnes:${carnes}`);

//si el usuario quiere eliminar un elemento de la lista de compra//
let pregunta4 = prompt("¿deseas eliminar algun alimento de la lista?\n" + "si/no");
while(pregunta4 != "no"){
	while(pregunta4 != "si" && pregunta1 != "no"){
		alert("operacion no reconocida");
		pregunta4 = prompt("¿deseas eliminar algun alimento de la lista?\n" + "si/no");
	}
	if(pregunta4 === "no"){
		break;
	}
	eliminados = prompt("¿cuál alimento quieres aliminar?");

	if(lacteos.includes(eliminados)){
		lacteos.pop();
	} else if(embutidos.includes(eliminados)){
		embutidos.pop();
	} else if(frutas.includes(eliminados)){
		frutas.pop()
	} else if(verduras.includes(eliminados)){
		verduras.pop();
	} else if(carnes.includes(eliminados)){
		carnes.pop();
	} else{
		alert("alimento no encontrado");
	}
	
	pregunta4 = prompt("¿deseas eliminar algun alimento de la lista?\n" + "si/no");
}

console.log(`lista de compras:\n lacteos:${lacteos}\n embutidos:${embutidos}\n frutas:${frutas}\n verduras:${verduras}\n carnes:${carnes}`);