let listaDeCompra = [];
let categorias = [
	{categoria: "lacteos", alimento: " "},
	{categoria: "carnicos", alimento: " "},
	{categoria: "embutidos", alimento: " "},
	{categoria: "frutas", alimento: " "},
	{categoria: "verduras", alimento: " "}
	];
let pregunta1 = prompt("¿deseas agregar un alimento a tu lista de compras?\n" + "SI\n" + "NO");

while(pregunta1 === "si"){
	let pregunta2 = listaDeCompra.push(prompt("¿que alimento deseas agregar?"));
	let pregunta3 = prompt("¿en que categoria encaja ese alimento?\n" + "lacteos\n" + "carnicos\n" + "embutidos\n" + "frutas\n" + "verduras\n");
	
	let nuevaLista = categorias.filter(function(product){
			return product.alimento += //listaDeCompra;
	});
	
	pregunta1 = prompt("¿deseas agregar un alimento a tu lista de compras?\n" + "SI\n" + "NO");
}

console.log(listaDeCompra);
console.log(categorias);