// Student portal dashboard

// Quick search: shows an error message when the box is empty
const searchInput = document.querySelector("#search-input");
const searchError = document.querySelector("#search-error");

document.querySelector("#search-button").addEventListener("click", () => {
    if (searchInput.value.trim() === "") {
        searchError.hidden = false;
    } else {
        searchError.hidden = true;
    }
});

// Write your code below

