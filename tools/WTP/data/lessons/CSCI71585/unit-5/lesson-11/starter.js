// Workshop comment wall
// WARNING: this code has security problems, on purpose. You will find and fix them in this lesson.

// Elements used throughout the page
const commentForm = document.querySelector("#comment-form");
const nameInput = document.querySelector("#comment-name");
const websiteInput = document.querySelector("#comment-website");
const messageInput = document.querySelector("#comment-message");
const commentList = document.querySelector("#comment-list");
const clearButton = document.querySelector("#clear-comments");

// Comments are saved in local storage, standing in for a database on a server
const exampleComments = [
    { name: "Amara", website: "https://example.com", message: "Looking forward to seeing everyone on Saturday!" },
    { name: "Tom", website: "", message: "Bring a laptop if you have one." }
];

let comments = JSON.parse(localStorage.getItem("comments")) ?? [...exampleComments];

function saveComments() {
    localStorage.setItem("comments", JSON.stringify(comments));
}

// Displays every comment
function renderComments() {
    commentList.innerHTML = "";

    comments.forEach((comment) => {
        const name = comment.website
            ? `<a href="${comment.website}" target="_blank">${comment.name}</a>`
            : comment.name;

        commentList.innerHTML += `
            <li class="comment">
                <p class="comment-name">${name}</p>
                <p>${comment.message}</p>
            </li>`;
    });
}

commentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const website = websiteInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || message === "") {
        return;
    }

    comments.push({ name: name, website: website, message: message });
    saveComments();
    renderComments();
    commentForm.reset();
});

clearButton.addEventListener("click", () => {
    comments = [...exampleComments];
    saveComments();
    renderComments();
});

renderComments();
