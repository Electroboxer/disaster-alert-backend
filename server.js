require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 🌍 API Endpoints List
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Disaster Alert API",
    endpoints: {
      earthquakes: "/earthquakes",
      weather: "/weather?lat={latitude}&lon={longitude}",
      wildfires: "/wildfires",
      survival_tips: "/survival-tips",
      shelters: "/shelters"
    },
  });
});

// 🌍 Earthquake API (USGS)
app.get("/earthquakes", async (req, res) => {
  try {
    const response = await axios.get(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch earthquake data" });
  }
});

// 🌧️ Weather API (OpenWeather)
app.get("/weather", async (req, res) => {
  try {
    const { lat, lon } = req.query;
    if (!lat || !lon) return res.status(400).json({ error: "Latitude and Longitude required" });

    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

// 🔥 Wildfire API (NASA FIRMS)
app.get("/wildfires", async (req, res) => {
  try {
    res.json({ message: "NASA Wildfire API data available in backend." });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch wildfire data" });
  }
});

// 🏠 Shelter Locations in Chennai
app.get("/shelters", (req, res) => {
  const shelters = [
    { name: "Shelter 1", lat: 13.0827, lon: 80.2707 },
    { name: "Shelter 2", lat: 13.0500, lon: 80.2000 },
    { name: "Shelter 3", lat: 13.0800, lon: 80.2500 }
  ];

  res.json({ message: "Shelters in Chennai", shelters });
});

// 📜 Survival Tips
app.get("/survival-tips", (req, res) => {
  res.json({ tips: ["Keep an emergency kit", "Stay informed", "Have an evacuation plan"] });
});

// 🚀 Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

