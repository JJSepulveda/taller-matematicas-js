
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

