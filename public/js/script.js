
document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([45.5155, -122.6793], 12); // Adjust center

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Loop through the profiles and add markers
    fetch('/data/people.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(person => {
                L.marker([person.lat, person.lng])
                    .addTo(map)
                    .bindPopup(`<h3>${person.name}</h3><p>${person.bio}</p><a href="${person.link}" target="_blank">More Info</a>`);
            });
        })
        .catch(error => console.error('Error loading map data:', error));
});
