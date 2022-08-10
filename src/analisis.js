console.log(salarios)

// Analiss personal
function encontrarPersona(personaEnBusqueda) {
	// como no se coloco un idendificador en el arreglo salarios
	// se esta usando el nombre de la persona
	const persona = salarios.find((persona) => {
		return persona.name == personaEnBusqueda
	})

	return persona;
}


function medianaDeSalariosPorPersona(nombrePersona) {
	const trabajos = encontrarPersona(nombrePersona).trabajos;

	const salarios = trabajos.map((elemento) => {
		return elemento.salario;
	})

	const medianaSalarios = PlatziMath.calcularMediana(salarios);

	return medianaPorPersona;
}