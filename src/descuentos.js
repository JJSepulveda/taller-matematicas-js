// Nodos
const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const pResult = document.querySelector('#result')

// eventos
btn.addEventListener('click', calcularPrecioConDescuento);

// constantes
const coupons = {
	'TEXTO_DEL_CUPON20': {
		valid: true,
		value: 20,
	},
	'TEXTO_DEL_CUPON10': {
		valid: true,
		value: 10,
	},
}

// funciones 
function calcularPrecioConDescuento() {
	/*
	Formula: (P * (100 - D) / 100)
	*/
	const price = Number(inputPrice.value);
	const coupon = inputCoupon.value;
	let discount;

	if (!price || !coupon) {
		pResult.innerText = "Por favor llena los campos."
		return;
	}

	coupon_valid = coupons[coupon];
	console.log(coupon)

	if(!coupon_valid || !coupon_valid.valid) {
		pResult.innerText = `Lo sentimos 😭, el cupon: ${coupon_valid}, no es valido`
		return;
	}

	discount = coupon_valid.value;

	if (discount > 100) {
		pResult.innerText = `${discount}!! DE DESCUENTO 👀. Creo que escribieste mal.`
		return;
	}

	const newPrice = (price * (100 - discount)) / 100;
	pResult.innerText = "El precio aplicando el descuetos es:" + newPrice;
}