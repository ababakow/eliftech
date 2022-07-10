const navs = document.querySelectorAll('#navbar a');
for (let item of navs) {
	if (item.getAttribute('href') === window.location.pathname) {
		item.classList.add('active');
		item.classList.add('text-decoration-underline');
	}
}
