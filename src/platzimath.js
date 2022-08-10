
const PlatziMath = {};

/*
Promedio
*/

/**
 * Get the average of a list of numbers
 * @author yeiyeh
 * @param {List[Number]} lista - list of numbers
 * @returns {Number} promedio - the average
 * */
PlatziMath.promedioFor = function promedioFor(lista) {
	/*
	Calcular el promedio
	
	Calcula el promedio de los valores en una lista
	
	parametros:
	-lista: [number]

	retorna:
	- promedio: number
	*/
	let suma = 0;

	for(elemento of lista) {
		suma += elemento
	}

	const promedio = suma / lista.length;

	return promedio;
}

/**
 * Get the average of a list of numbers
 * @author yeiyeh
 * @param {List[Number]} lista - list of numbers
 * @returns {Number} promedio - the average
 * */
PlatziMath.promedioReducer = function promedioReducer(lista) {
	const suma = lista.reduce((valorAcomulado, valor) => valorAcomulado + valor, 0);
	const promedio = suma / lista.length;
	return promedio
}

console.log(promedioReducer(test_list))

/*
Mediana
*/

PlatziMath.isEven = function isEven(arr){
	/* 
	Si el residuo es 0 entoneces par
	*/
	return !(arr.length % 2)
}

PlatziMath.calcularMediana = function calcularMediana(arr) {
	// Variable donde almacenaremos el resultado
	let mediana;
	// revisamos si el numero de elemtnos en la lista es par
	const laListaEsPar = isEven(arr)
	// obtenesmo la mitad del arreglo y lo ajustamos para que coincida con los indices del arreglo
	const laMitadDelArreglo = Math.round(arr.length / 2) - 1
	// ordenamos la lista para que no afecte el resultado
	const listaOrdenada = ordenarLista(arr)

	if (laMitadDelArreglo < 0){
		// 😒 el arreglo esta vacio...
		return;
	}
	
	if (laListaEsPar) {
		const valores = [
			listaOrdenada[laMitadDelArreglo],
			listaOrdenada[laMitadDelArreglo + 1]
		]
		mediana = promedioFor(valores)	
	}
	else {
		mediana = listaOrdenada[laMitadDelArreglo]
	}

	return mediana;
}


PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
	function ordenarListaSort(valorAcumulado, nuevoValor) {
		// if (valorAcumulado > nuevoValor) {
		// 	return 1;
		// }
		// else if (valorAcumulado == nuevoValor) {
		// 	return 0;
		// }
		// else if (valorAcumulado < nuevoValor) {
		// 	return -1;
		// }

		// Esto es equivalente a las acondiciones de arriba.
		return valorAcumulado - nuevoValor;
		//return nuevoValor - valorAcomulado;
		// return 10 - 5 -> 5;
		// return 5 - 10 -> -5;
		// return 5 - 5 -> 0;
	}

	// const lista = listaDesordenada.sort(ordenarListaSort);
	const lista = listaDesordenada.sort((a, b) => a - b);
	return lista;
}

