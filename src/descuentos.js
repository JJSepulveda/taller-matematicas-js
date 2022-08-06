// Nodos
const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const pResult = document.querySelector('#result')

// eventos
btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
	/*
	Formula: (P * (100 - D) / 100)
	*/
	const price = Number(inputPrice.value);
	const discount = Number(inputDiscount.value);

	if (!price || !discount) {
		pResult.innerText = "Por favor llena los campos."
		return;
	}

	if (discount > 100) {
		pResult.innerText = `${discount}!! DE DESCUENTO 👀. Creo que escribieste mal.`
		return;
	}

	const newPrice = (price * (100 - discount)) / 100;
	pResult.innerText = "El precio aplicando el descuetos es:" + newPrice;
}