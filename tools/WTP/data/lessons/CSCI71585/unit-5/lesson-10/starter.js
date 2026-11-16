// Beginners' Web Workshop: sessions and bookings

// The workshop's sessions, as they were when the page loaded
const sessions = [
    { id: 1, title: "How the Web Works", time: "10:00", speaker: "Amara Kofi", room: "2.04", spacesLeft: 12, booked: false,
      description: "What happens when you type a web address, from browsers and servers to HTML files." },
    { id: 2, title: "Your First HTML Page", time: "10:30", speaker: "Amara Kofi", room: "2.04", spacesLeft: 4, booked: false,
      description: "Write a complete web page from scratch, with headings, paragraphs and links." },
    { id: 3, title: "Images and Accessibility", time: "11:30", speaker: "Li Chen", room: "2.06", spacesLeft: 0, booked: false,
      description: "Add images to your page, and learn how to write alt text that helps everyone." },
    { id: 4, title: "Styling With CSS", time: "13:30", speaker: "Tom Walsh", room: "2.04", spacesLeft: 9, booked: false,
      description: "Use colours, fonts and spacing to turn a plain page into a designed one." },
    { id: 5, title: "Layouts With Flexbox and Grid", time: "14:15", speaker: "Tom Walsh", room: "2.04", spacesLeft: 15, booked: false,
      description: "Arrange your content into rows, columns and grids that work on any screen." },
    { id: 6, title: "Your First Line of JavaScript", time: "15:00", speaker: "Priya Shah", room: "2.06", spacesLeft: 2, booked: false,
      description: "Make your page respond to a click, and change its content with JavaScript." },
    { id: 7, title: "Testing With a Screen Reader", time: "15:45", speaker: "Li Chen", room: "2.06", spacesLeft: 7, booked: false,
      description: "Experience your page the way screen reader users do, and fix what you find." },
    { id: 8, title: "Publishing Your Site", time: "16:30", speaker: "Priya Shah", room: "2.04", spacesLeft: 20, booked: false,
      description: "Put your finished page online for free, so that anyone can visit it." }
];

// A SIMULATED booking server. You do not need to change this function.
// It takes 1.5 seconds, then either confirms the booking with a reference,
// or fails if the session has filled up since the page loaded.
function fakeSendBooking(booking) {
    const fullOnServer = [3, 6];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fullOnServer.includes(booking.sessionId)) {
                reject(new Error("Sorry, this session filled up while you were booking. Please choose another session."));
            } else {
                const reference = `WS-${Math.floor(1000 + Math.random() * 9000)}`;
                resolve({ reference: reference });
            }
        }, 1500);
    });
}

// Elements used throughout the page
const sessionList = document.querySelector("#session-list");
const pageStatus = document.querySelector("#page-status");

// Displays every session as a card. Call it again whenever a session changes.
function renderSessions() {
    sessionList.replaceChildren();

    sessions.forEach((session) => {
        const card = document.createElement("article");
        card.className = "session-card";

        const heading = document.createElement("h2");
        heading.textContent = session.title;

        const details = document.createElement("p");
        details.textContent = `${session.time} · ${session.speaker} · Room ${session.room}`;

        const spaces = document.createElement("p");
        spaces.className = "spaces";
        if (session.booked) {
            spaces.textContent = "You are booked on this session";
        } else if (session.spacesLeft === 0) {
            spaces.textContent = "Fully booked";
        } else {
            spaces.textContent = `${session.spacesLeft} spaces left`;
        }

        const actions = document.createElement("div");
        actions.className = "card-actions";

        const detailsButton = document.createElement("button");
        detailsButton.type = "button";
        detailsButton.className = "button button-secondary";
        detailsButton.textContent = "Details";
        detailsButton.dataset.action = "details";
        detailsButton.dataset.id = session.id;
        actions.append(detailsButton);

        const bookButton = document.createElement("button");
        bookButton.type = "button";
        bookButton.className = "button";
        bookButton.dataset.id = session.id;
        if (session.booked) {
            bookButton.textContent = "Cancel booking";
            bookButton.dataset.action = "cancel";
        } else {
            bookButton.textContent = "Book";
            bookButton.dataset.action = "book";
            bookButton.disabled = session.spacesLeft === 0;
        }
        actions.append(bookButton);

        card.append(heading, details, spaces, actions);
        sessionList.append(card);
    });
}

renderSessions();

// Write your code below

