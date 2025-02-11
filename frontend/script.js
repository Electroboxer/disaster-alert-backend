const BASE_URL = "http://localhost:5000"; // Backend Server

// Fetch Earthquake Data
async function fetchEarthquakes() {
    const response = await fetch(`${BASE_URL}/earthquakes`);
    const data = await response.json();
    displayAlerts(data.features.map(eq => `Magnitude ${eq.properties.mag} - ${eq.properties.place}`));
}

// Fetch Weather Data
async function fetchWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            const { latitude, longitude } = position.coords;
            const response = await fetch(`${BASE_URL}/weather?lat=${latitude}&lon=${longitude}`);
            const data = await response.json();
            displayAlerts([`Temperature: ${data.main.temp}°C, Weather: ${data.weather[0].description}`]);
        });
    }
}

// Fetch Wildfire Data
async function fetchWildfires() {
    const response = await fetch(`${BASE_URL}/wildfires`);
    const data = await response.json();
    displayAlerts(["Wildfire data available in backend (NASA API)"]);
}

// Fetch Survival Tips
async function fetchSurvivalTips() {
    const response = await fetch(`${BASE_URL}/survival-tips`);
    const data = await response.json();
    displayAlerts(data.tips);
}

// Display Alerts in UI
function displayAlerts(alerts) {
    document.getElementById("alerts-container").innerHTML = alerts.map(a => `<p>${a}</p>`).join("");
}

// Initialize Map
var map = L.map('map').setView([13.0827, 80.2707], 12); // Default: Chennai

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Get User Location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        var userLocation = [position.coords.latitude, position.coords.longitude];
        map.setView(userLocation, 12);
        L.marker(userLocation).addTo(map).bindPopup("You are here").openPopup();
    });
}

// Fetch & Display Shelters
async function fetchShelters() {
    const response = await fetch(`${BASE_URL}/shelters`);
    const data = await response.json();
    
    data.shelters.forEach(shelter => {
        L.marker([shelter.lat, shelter.lon]).addTo(map)
            .bindPopup(`<b>${shelter.name}</b><br>Latitude: ${shelter.lat}<br>Longitude: ${shelter.lon}`);
    });
}


