// UK Weather Explorer

// The places shown when the page first loads
const defaultPlaces = [
    { name: "Leeds", latitude: 53.80, longitude: -1.55 },
    { name: "London", latitude: 51.51, longitude: -0.13 },
    { name: "Manchester", latitude: 53.48, longitude: -2.24 },
    { name: "Edinburgh", latitude: 55.95, longitude: -3.19 },
    { name: "Cardiff", latitude: 51.48, longitude: -3.18 },
    { name: "Belfast", latitude: 54.60, longitude: -5.93 }
];

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
const themeButton = document.querySelector("#theme-button");
const loadButton = document.querySelector("#load-button");
const spinner = document.querySelector("#spinner");
const statusMessage = document.querySelector("#status-message");
const sortSelect = document.querySelector("#sort-select");
const rainFilter = document.querySelector("#rain-filter");
const resultCount = document.querySelector("#result-count");
const placeList = document.querySelector("#place-list");
const placeForm = document.querySelector("#place-form");
const placeInput = document.querySelector("#place-input");
const placeSubmit = document.querySelector("#place-submit");
const detailsDialog = document.querySelector("#details-dialog");
const detailsTitle = document.querySelector("#details-title");
const detailsSummary = document.querySelector("#details-summary");
const detailsDays = document.querySelector("#details-days");
const detailsClose = document.querySelector("#details-close");

// Write your code below

