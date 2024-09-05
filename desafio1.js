let numeroUn = 1;
let stringUn = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';

if(numeroUn == stringUn){
	console.log('mismo valor diferentes tipos');
} else{
	console.log('las variables numeroUn y stringUn no tienen el mismo valor');
}

if(numeroTreinta === stringTreinta){
	console.log('mismo valor, mismo tipo');
} else{
	console.log('las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
}

if(numeroDiez == stringDiez){
	console.log('mismo valor, diferentes tipos');
} else{
	console.log('las variables numeroDiez y stringDiez no tienen el mismo valor');
}