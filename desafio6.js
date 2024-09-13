let listaDeCompra = [];
let lacteos = [];
let embutidos = [];
let frutas = [];
let verduras = [];
let carnes = [];
let categoria = "";
let eliminados = "";

let pregunta1 = prompt("¿deseas agregar un alimento a tu lista de compras?\n" + "si\n" + "no");

while(pregunta1 != "no"){
	while(pregunta1 != "si" && pregunta1 != "no"){
		alert("operacion no reconocida");
		pregunta1 = prompt("¿deseas agregar un alimento a tu lista de compras?\n" + "si\n" + "no");
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
	pregunta1 = prompt("¿deseas agregar un alimento a tu lista de compras?\n" + "si\n" + "no");
}

console.log(`lista de compras:\n lacteos:${lacteos}\n embutidos:${embutidos}\n frutas:${frutas}\n verduras:${verduras}\n carnes:${carnes}`);

//si el usuario quiere eliminar un elemento//
let pregunta4 = prompt("¿quieres eliminar algun alimento de la lista?\n" + "si\n" + "no");

while(pregunta4 != "no"){
	while(pregunta4 != "si" && pregunta1 != "no"){
		alert("operacion no reconocida");
		pregunta4 = prompt("¿quieres eliminar algun alimento de la lista?\n" + "si\n" + "no");
	}
	if(pregunta4 === "no"){
		break;
	}
	eliminados = prompt("¿cuál alimento quieres aliminar?");
	let listaEliminados = listaDeCompra.includes(eliminados);
	if(listaDeCompra){
		let elementoEliminado = listaDeCompra.shift();
		console.log("elementoEliminado");
	} else{
		console.log("alimento no encontrado");
	}
	
	pregunta4 = prompt("¿quieres eliminar algun alimento de la lista?\n" + "si\n" + "no");
}

console.log(`lista de compras:\n lacteos:${lacteos}\n embutidos:${embutidos}\n frutas:${frutas}\n verduras:${verduras}\n carnes:${carnes}`);