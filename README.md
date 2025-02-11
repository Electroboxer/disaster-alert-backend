# disaster-alert-backend
Disaster Alert & Evacuation Guide

🌍 Overview

The Disaster Alert & Evacuation Guide is a real-time web application that provides users with up-to-date information on disasters, weather conditions, and evacuation shelters. The app integrates multiple APIs to fetch real-time earthquake, wildfire, and weather alerts while also displaying nearby evacuation shelters on an interactive map.

🚀 Features

Real-Time Disaster Alerts: Fetch earthquake, wildfire, and weather alerts from external APIs.

Interactive Map: Displays user location and nearest evacuation shelters.

Offline Map Support: Uses OpenStreetMap tiles for accessibility.

Survival Tips: Provides essential safety tips for different disasters.

🛠️ Tech Stack

Frontend: HTML, CSS, JavaScript, Leaflet.js

Backend: Node.js, Express.js

APIs Used:

USGS Earthquake API

NASA FIRMS Wildfire API

OpenWeather API

OpenStreetMap (for mapping)

Deployment: Runs on localhost (can be deployed to cloud services)

📂 Project Structure

/DisasterAlertApp
│── backend/
│   ├── server.js  # Express server handling API requests
│── frontend/
│   ├── index.html # Main HTML file
│   ├── styles.css # Styling for the web app
│   ├── script.js  # JavaScript for UI & API integration
│── README.md      # Project Documentation
│── .env           # API Keys (ignored in GitHub)

🔧 Setup & Installation

1️⃣ Clone the Repository

git clone https://github.com/yourusername/Disaster-Alert-Guide.git
cd Disaster-Alert-Guide

2️⃣ Backend Setup

Navigate to the backend/ directory:

cd backend

Install dependencies:

npm install

Create a .env file and add your OpenWeather API key:

OPENWEATHER_API_KEY=your_api_key_here

Start the backend server:

node server.js

3️⃣ Frontend Setup

Open frontend/index.html in a browser.

Ensure the backend is running on http://localhost:5000.

📌 API Endpoints

Endpoint

Description

/earthquakes

Fetch real-time earthquake data

/weather?lat={latitude}&lon={longitude}

Fetch weather data based on user location

/wildfires

Fetch wildfire alerts (NASA API)

/survival-tips

Get survival tips for disasters

/shelters

Fetch nearby evacuation shelters

🎯 Future Enhancements

Add AI-based disaster prediction models.

Enable push notifications for critical alerts.

Expand shelter database to more locations.

🤝 Contributing

Contributions are welcome! Feel free to fork the repo, make changes, and submit a pull request.

📜 License

This project is open-source and available under the MIT License.
