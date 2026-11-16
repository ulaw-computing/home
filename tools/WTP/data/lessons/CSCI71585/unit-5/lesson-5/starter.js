// Weather checker

// A SIMULATED weather server. You do not need to change this function.
// It works like a real request: it takes two seconds, then either provides
// the weather for the city, or fails if the city is not known.
function fakeFetchWeather(city) {
    const knownWeather = {
        Leeds: { city: "Leeds", temperature: 12, summary: "cloudy" },
        York: { city: "York", temperature: 11, summary: "light rain" },
        Hull: { city: "Hull", temperature: 13, summary: "sunny spells" },
        Sheffield: { city: "Sheffield", temperature: 10, summary: "overcast" }
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (knownWeather[city]) {
                resolve(knownWeather[city]);
            } else {
                reject(new Error(`No weather data is available for ${city}.`));
            }
        }, 2000);
    });
}

// Elements used throughout the page
const result = document.querySelector("#weather-result");
const weatherButton = document.querySelector("#weather-button");
const citySelect = document.querySelector("#city-select");

// Write your code below

