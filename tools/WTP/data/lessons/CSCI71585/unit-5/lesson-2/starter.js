// This lesson is about CSS: the JavaScript is already written for you.

// Accordion: opens and closes each section, and updates aria-expanded
document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener("click", () => {
        const isOpen = button.getAttribute("aria-expanded") === "true";
        const panel = document.querySelector(`#${button.getAttribute("aria-controls")}`);

        button.setAttribute("aria-expanded", String(!isOpen));
        panel.hidden = isOpen;
    });
});

// Help panel: adds and removes the open class
const helpButton = document.querySelector("#help-button");
const helpPanel = document.querySelector("#help-panel");
const closeHelp = document.querySelector("#close-help");

function setHelpOpen(isOpen) {
    helpPanel.classList.toggle("open", isOpen);
    helpButton.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
        closeHelp.focus();
    } else {
        helpButton.focus();
    }
}

helpButton.addEventListener("click", () => setHelpOpen(true));
closeHelp.addEventListener("click", () => setHelpOpen(false));
