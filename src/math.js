/*
Cuadrado
*/
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcularCuadrado(lado) {
	return {
		perimetro: lado * 4,
		area: lado * lado
	}
}

console.group("Cuadrado")
console.log({
	ladoCuadrado,
	perimetroCuadrado,
})
console.groupEnd();

/*
Triangulo
*/
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2

function calcularTriangulo(lado1, lado2, base, altura) {
	return {
		perimetro: lado1 + lado2 + base,
		area: (base * altura) / 2
	}
}

function calcularAlturaTriangulo(lado, base) {
	/* Calcular altura de un triangulo isosceles */
	if (lado == base) {
		console.warn('Este no es un triángulo isosceles');
	} 
	else {
		return Math.sqrt( (lado**2) - (base**2) / 4);
	}
}

function calcularAreaTrianguloIsocelesFormulaHeron(lado1, lado2, base){
	/*
	S = Semiperimetro = (a + v + c) / 2
	Formula: A = Math.sqrt(S * (S - a) * (S - b) * (S - c))
	*/
	const semiperimetro = (lado1 + lado2 + base) / 2;
	const area = Math.sqrt(
		semiperimetro 
		* (semiperimetro - lado1) 
		* (semiperimetro - lado2) 
		* (semiperimetro - base)
	)
	return area
}

function calcularAlturaTrianguloEscaleno(a, b, c) {
	/*
	Calcula la altura de un triangulo escaleno
	a = lado1
	b = base
	c = lado2
	*/
	const x = (c**2 - a**2 + b**2) / (2 * b);
	const h = Math.sqrt(c**2 - x**2);

	return h;
}

console.group("Triangulo")
console.log({
	ladoTriangulo1,
	ladoTriangulo2,
	ladoTrianguloBase,
	alturaTriangulo,
})
console.groupEnd();

/*
Circulo
*/

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const circunferencia = diametroCirculo * Math.PI;
const areaCirculo = (radioCirculo ** 2) * Math.PI;

function calcularCirculo(radio) {
	const diametro = radio * 2;
	const radioAlCuadrado = Math.pow(radio, 2);

	return {
		circunferencia: diametro * Math.PI,
		area: radioAlCuadrado * Math.PI
	}
}

console.group("Circulo")
console.log({
	radioCirculo,
	diametroCirculo,
	circunferencia,
	areaCirculo,
})
console.groupEnd();