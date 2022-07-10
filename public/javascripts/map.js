let map;
const mapDiv = document.getElementById('map');
let prevMarker;

function initMap() {
	map = new google.maps.Map(mapDiv, {
		center: { lat: 50.45, lng: 30.524 },
		zoom: 10
	});
	const geocoder = new google.maps.Geocoder();
	google.maps.event.addListener(map, 'click', async function(event) {
		placeMarker(event.latLng);
		await setAdress(geocoder, event.latLng.lat(), event.latLng.lng());
	});
}

function placeMarker(location) {
	if (prevMarker) prevMarker.setMap(null);
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});
	prevMarker = marker;
}

async function setAdress(geocoder, lat, lng) {
	const adress = document.getElementById('adress');
	const latlng = { lat, lng };
	try {
		const adr = await geocoder.geocode({ location: latlng });
		adress.value = adr.results[0].formatted_address;
	} catch (e) {
		throw e;
	}
}

window.initMap = initMap;
