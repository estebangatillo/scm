var map = L.map('map').setView([45.5155, -122.6793], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

document.querySelectorAll('.profile').forEach(profile => {
    var lat = profile.getAttribute('data-lat');
    var lng = profile.getAttribute('data-lng');

    var marker = L.marker([lat, lng]).addTo(map)
        .bindPopup(profile.querySelector('h3').textContent);

    profile.addEventListener('click', function() {
        map.setView([lat, lng], 14);
        marker.openPopup();
    });
});
