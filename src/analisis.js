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

// Análisis empresarial
/* {
  Industrias Mokepon: {
    2018: [salario]
  }
  Industrias Mokepon: {
    2018: [salario, salarios, salrios]
    2019: 
    2025: 
    2026: 
  },
  Industrias Mokepon: {},
  Industrias Mokepon: {},
  Industrias Mokepon: {},
} */
// Primero vamos a reestrcuturar los datos para poder
// hacer sacar la mediana por empresa
const empresas = {};

for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
    }

    if (!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }

    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}

console.log({empresas});

/**
 * Calculate the median of one business of a given year
 * @param {String} nombre - The name of the business
 * @param {Number} year - The year
 * @returns {Number} MedianaEmpresa - The median
 * */
function medianaEmpresaYear(nombre, year) {
  if (!empresas[nombre]) {
    console.warn('La empresa no existe');
  } else if (!empresas[nombre][year]) {
    console.warn('La empresa no dio salarios ese año');
  } else {
  	const MedianaEmpresa = PlatziMath.calcularMediana(empresas[nombre][year])
    return MedianaEmpresa;
  }
}