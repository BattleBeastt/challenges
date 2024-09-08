let listaDeCompra = [];
let categoria = ["lacteos", "embutidos", "frutas", "verduras"];
let pregunta1 = prompt("¿deseas agregar un alimento a tu lista de compras?\n" + "SI\n" + "NO");

while(pregunta1 === "si"){
	let pregunta2 = listaDeCompra.push(prompt("¿que alimento deseas agregar?"));
	let pregunta3 = prompt("¿a qué categoria pertenence ese alimento?\n" + "lacteos\n" + "embutidos\n" + "frutas\n" + "verduras\n").value;
	
	if(pregunta3){
		let nuevaLista = categoria.push();
	} else{
		console.log("categoria no encontrada");
	}
	
	pregunta1 = prompt("¿deseas agregar un alimento a tu lista de compras?\n" + "SI\n" + "NO");
}

console.log(listaDeCompra);
console.log("lista de compras: " + categoria);

	// {categoria: "lacteos", alimento: " "},
	// {categoria: "carnicos", alimento: " "},
	// {categoria: "embutidos", alimento: " "},
	// {categoria: "frutas", alimento: " "},
	// {categoria: "verduras", alimento: " "}