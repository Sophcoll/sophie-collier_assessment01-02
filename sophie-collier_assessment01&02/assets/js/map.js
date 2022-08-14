mapboxgl.accessToken = 'pk.eyJ1Ijoia2llcmFub2Rvbm5lbGwiLCJhIjoiY2s1ZnY4ajY2MDFjejNkczgxc2pyNW9rZyJ9.dD5AEQ1o6is_qyKZxcKPhg';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-93.2, 18.1], // starting position [lng, lat]
zoom: 4, // starting zoom
});
 

// SHOWS PINNED PLACES ON MAP

const marker0 = new mapboxgl.Marker()
.setLngLat([-99.1331785, 19.4326296])
.addTo(map);
const marker1 = new mapboxgl.Marker()
.setLngLat([-97.0726428, 15.8693331])
.addTo(map);
const marker2 = new mapboxgl.Marker()
.setLngLat([-92.61551841991157, 16.6835469])
.addTo(map);
const marker3 = new mapboxgl.Marker()
.setLngLat([-91.18617380722014, 14.68014625])
.addTo(map);
const marker4 = new mapboxgl.Marker()
.setLngLat([-90.883386, 14.5366748])
.addTo(map);
const marker5 = new mapboxgl.Marker()
.setLngLat([-86.94340193880814, 16.0965571])
.addTo(map);
const marker6 = new mapboxgl.Marker()
.setLngLat([-88.3922556, 18.6782559])
.addTo(map);
const marker7 = new mapboxgl.Marker()
.setLngLat([-87.42953531439221, 20.2152358])
.addTo(map);
const marker8 = new mapboxgl.Marker()
.setLngLat([-88.2016999, 20.6902505])
.addTo(map);