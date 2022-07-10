listenAddBtns();
disableOtherShop();
disableAddedProducts();

function listenAddBtns() {
	const addBtns = document.querySelectorAll('.add-to-cart');
	for (let addBtn of addBtns) {
		addBtn.addEventListener('click', async (e) => {
			await addToCart(addBtn);
			disableOtherShop();
		});
	}
}

async function addToCart(addBtn) {
	const url = `/shop/get-product?id=${addBtn.id}`;
	const data = await getData(url);
	if (!localStorage.deliveryCart) localStorage.setItem('deliveryCart', '[]');
	const arr = JSON.parse(localStorage.getItem('deliveryCart'));
	arr.push(data);
	localStorage.setItem('deliveryCart', JSON.stringify(arr));
	disableAddBtn(addBtn);
}

async function getData(url) {
	try {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (e) {
		console.log(e);
	}
}

function disableOtherShop() {
	const cart = JSON.parse(localStorage.getItem('deliveryCart'));
	if (cart.length) {
		const shopBtns = document.querySelectorAll('.button-shop');
		shopBtns.forEach((btn) => {
			if (btn.getAttribute('href').replace('/shop?shop=', '') != cart[0].shop) {
				btn.style.pointerEvents = 'none';
				btn.style.backgroundColor = '#cfcfcf';
			}
		});
	}
}

function disableAddedProducts() {
	const cart = JSON.parse(localStorage.getItem('deliveryCart'));
	if (cart.length) {
		cart.forEach((item) => disableAddBtn(document.getElementById(item._id)));
	}
}

function disableAddBtn(btn) {
	btn.innerText = 'added';
	btn.classList.add('disabled');
}
