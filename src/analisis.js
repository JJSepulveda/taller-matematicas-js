console.log(salarios)

/**
 * Find a person an return its data
 * @param {String} personaEnBusqueda - The name of the person
 * @returns {Object} persona - The information of the person
 * */
function encontrarPersona(personaEnBusqueda) {
	// como no se coloco un idendificador en el arreglo salarios
	// se esta usando el nombre de la persona
	const persona = salarios.find((persona) => {
		return persona.name == personaEnBusqueda
	})

	return persona;
}


/**
 * Calculate the median of the salary of one person
 * @param {String} nombrePersona - The name of the person
 * @returns {Number} medianaPorPersona - The median of the salaries
 * */
function medianaDeSalariosPorPersona(nombrePersona) {
	const trabajos = encontrarPersona(nombrePersona).trabajos;

	const salarios = trabajos.map((elemento) => {
		return elemento.salario;
	})

	const medianaSalarios = PlatziMath.calcularMediana(salarios);

	return medianaPorPersona;
}

/**
 * Calculate salary's percentage growth and returns the new salary.
 * @param {String} nombrePersona - The name of the person
 * @returns {Number} nuevoSalario - The new salary based on salary's percentage growth 
 * */
function porcentajeDeCrecimiento(nombrePersona) {
	const trabajos = encontrarPersona(nombrePersona).trabajos;

	let porcentajesCrecimiento = [];

	for (let i = 1; i < trabajos.length; i++) {
		const salarioActual = trabajos[i].salario;
		const salarioPasado = trabajos[i - 1].salario;
		const crecimiento = salarioActual - salarioPasado;
		const porcentajeCrecimiento = crecimiento / salarioPasado;
		porcentajesCrecimiento.push(porcentajeCrecimiento)
	}

	const medianaDePorcentajeDeCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
	const ultimoSalario = trabajos[trabajos.length - 1].salario;
	const aumento = ultimoSalario * medianaDePorcentajeDeCrecimiento;
	const nuevoSalario = ultimoSalario + aumento

	console.log({
		porcentajesCrecimiento,
		medianaDePorcentajeDeCrecimiento,
		nuevoSalario
	})

	return nuevoSalario;
}