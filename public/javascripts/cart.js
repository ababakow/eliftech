displayGoods();
listenRemoveProduct();
setTotalPrice();
listenUpdTotalPrice();
//========================================================================
function displayGoods() {
	const goodsInCart = JSON.parse(localStorage.getItem('deliveryCart'));
	const cart = document.querySelector('.card-cart');
	let tmp = '';

	for (let product of goodsInCart) {
		tmp += generateHtml(product);
	}
	cart.innerHTML = tmp;
}

function generateHtml(data) {
	return `    
        <div class="card mb-3">
            <button type="button" id="${data._id}" class="btn-close button-close" aria-label="Close"></button>
            <div class="row g-0  text-center">
                <div class="col-xl-7">
                    <img src="${data.image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-xl-5">
                    <div class="card-body">
                        <h5 class="card-title mt-xl-3">${data.title}</h5>
                        <p>Price: ${data.price}</p>
                        <input type="number" name="goods[${data._id}]" class="form-control mt-xl-3 mx-auto" min=1 style="width: 120px;" value= "1">
                    </div>
                </div>
            </div>
        </div>    
    `;
}

function listenRemoveProduct() {
	const closeBtns = document.querySelectorAll('.button-close');
	for (let btn of closeBtns) {
		btn.addEventListener('click', () => {
			const goodsInCart = JSON.parse(localStorage.getItem('deliveryCart'));
			const card = btn.parentElement;
			const updGoogs = goodsInCart.filter((item) => item._id != btn.id);
			localStorage.setItem('deliveryCart', JSON.stringify(updGoogs));
			card.remove();
			setTotalPrice();
		});
	}
}

function setTotalPrice() {
	const totalPrice = document.querySelector('.total-price');
	const cards = document.querySelectorAll('.card-cart .card-body');
	let sum = 0;
	for (let card of cards) {
		sum += +card.children[1].innerText.slice(7) * card.children[2].value;
	}
	totalPrice.innerText = `Total price: ${sum}`;
}

function listenUpdTotalPrice() {
	const cards = document.querySelectorAll('.card-cart .card-body');
	for (let card of cards) {
		card.addEventListener('change', setTotalPrice);
	}
}
