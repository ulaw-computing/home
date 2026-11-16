// UK Weather Now

// The location of each city in the menu
const cities = {
    Leeds: { latitude: 53.80, longitude: -1.55 },
    London: { latitude: 51.51, longitude: -0.13 },
    Manchester: { latitude: 53.48, longitude: -2.24 },
    Edinburgh: { latitude: 55.95, longitude: -3.19 },
    Cardiff: { latitude: 51.48, longitude: -3.18 },
    Belfast: { latitude: 54.60, longitude: -5.93 }
};

// Descriptions of Open-Meteo's weather codes, from its documentation
const weatherDescriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Freezing fog",
    51: "Light drizzle",
    53: "Drizzle",
    55: "Heavy drizzle",
    56: "Light freezing drizzle",
    57: "Freezing drizzle",
    61: "Light rain",
    63: "Rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Freezing rain",
    71: "Light snow",
    73: "Snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Light showers",
    81: "Showers",
    82: "Heavy showers",
    85: "Light snow showers",
    86: "Snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with hail",
    99: "Thunderstorm with heavy hail"
};

// Elements used throughout the page
const weatherForm = document.querySelector("#weather-form");
const citySelect = document.querySelector("#city-select");
const statusMessage = document.querySelector("#status-message");

// Write your code below

