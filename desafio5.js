let listaDeCompra = [];
let categorias = ["lacteos", "carnicos", "embutidos", "frutas", "verduras"];
let lacteos = [];
let carnicos = [];
let embutidos = [];
let frutas = [];
let verduras = [];
let pregunta1 = prompt("¿deseas agregar un alimento a tu lista de compras?\n" + "SI\n" + "NO");

while(pregunta1 === "si"){
	let pregunta2 = listaDeCompra.push(prompt("¿que alimento deseas agregar?"));
	let pregunta3 = prompt("¿en que categoria encaja ese alimento?\n" + "lacteos\n" + "carnicos\n" + "embutidos\n" + "frutas\n" + "verduras\n");
	
	if(pregunta3){
		lacteos.push(pregunta2);
	} else {
		console.log("error al categorizar");
	}
	pregunta1 = prompt("¿deseas agregar un alimento a tu lista de compras?\n" + "SI\n" + "NO");
}

console.log(listaDeCompra);
console.log(lacteos);