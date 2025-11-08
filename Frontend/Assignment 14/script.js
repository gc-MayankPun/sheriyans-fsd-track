// An IIFE that handles the switching mode
(() => {
  const addNote = document.querySelector("#add-control");
  const closeNote = document.querySelector("#close-note");

  addNote.addEventListener("click", () => {
    toggleForm(false);
  });
  closeNote.addEventListener("click", () => {
    toggleForm(true);
    emptyAllErrors();
    form.reset();
  });
})();

const form = document.querySelector(".note-container form");
const imageUrlInput = form.querySelector("#image-url");
const fullNameInput = form.querySelector("#full-name");
const homeTownInput = form.querySelector("#home-town");
const purposeInput = form.querySelector("#purpose");
const categoryRadios = form.querySelectorAll("input[type='radio']");
const createNoteBtn = form.querySelector("#create-note-btn");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const imageUrl = imageUrlInput.value.trim();
  const fullName = fullNameInput.value.trim();
  const homeTown = homeTownInput.value.trim();
  const purpose = purposeInput.value.trim();

  let isValid = true;
  let selected = false;
  categoryRadios.forEach((cat) => {
    if (cat.checked) {
      selected = cat.value;
    }
  });

  if (imageUrl === "")
    isValid = checkError(imageUrlInput, "Please enter image URL");
  if (fullName === "")
    isValid = checkError(fullNameInput, "Please enter full name");
  if (homeTown === "")
    isValid = checkError(homeTownInput, "Please enter home town");
  if (purpose === "")
    isValid = checkError(purposeInput, "Please enter purpose");
  if (!selected) {
    let category = categoryRadios[0].parentElement;
    isValid = checkError(category, "Please select one category");
  }

  if (!isValid) return;

  saveToLocalStorage({ imageUrl, fullName, homeTown, purpose, selected });
  toggleForm(true);
  form.reset();
  renderCards(); // instantly update cards
});

function toggleForm(toggleValue) {
  const formContainer = document.querySelector(".form-container");
  const noteContainer = document.querySelector(".note-container");

  formContainer.style.display = toggleValue ? "flex" : "none";
  noteContainer.style.display = toggleValue ? "none" : "flex";
}

function checkError(input, message) {
  const error = input.parentElement.querySelector(".error-message");
  error.textContent = message;
  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      error.textContent = "";
    }
  });
  return false;
}

function emptyAllErrors() {
  const errors = form.querySelectorAll(".error-message");
  errors.forEach((error) => (error.textContent = ""));
}

function saveToLocalStorage(obj) {
  let oldTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  oldTasks.push(obj);
  localStorage.setItem("tasks", JSON.stringify(oldTasks));
}

function renderCards() {
  const container = document.querySelector(".card-container");
  const allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  container.innerHTML = ""; // clear old cards

  if (allTasks.length === 0) {
    const emptyContainer = document.createElement("div");
    emptyContainer.classList.add("empty-container");
    emptyContainer.innerHTML = `<p class="empty">Create some notes first 🥰🥰</p>`;
    container.appendChild(emptyContainer);
    return;
  }

  console.log("I runned!");
  allTasks.forEach((task, indx) => {
    const card = document.createElement("div");
    card.classList.add("card");
    if (indx > 2) card.classList.add("behind-card");

    card.innerHTML = `
      <img src="${task.imageUrl}" alt="card img pfp" />
      <h2>${task.fullName}</h2>
      <div class="location">
        <h3>Home Town</h3>
        <h3>${task.homeTown}</h3>
      </div>
      <div class="book-logs">
        <h3>Purpose</h3>
        <h3>${task.purpose}</h3>
      </div>
      <div class="reach-out">
        <button><i class="fa-solid fa-phone"></i> Call</button>
        <button>Message</button>
      </div>
    `;
    container.appendChild(card);
  });
}

renderCards(); // Initial render

(function moveCard() {
  const upCard = document.querySelector("#move-up-control");
  const downCard = document.querySelector("#move-down-control");

  // Move last card to the top
  upCard.addEventListener("click", () => {
    let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (allTasks.length === 0) return;

    console.log("I up the cards");
    if (allTasks.length > 1) {
      const last = allTasks.pop();
      allTasks.unshift(last);
      localStorage.setItem("tasks", JSON.stringify(allTasks));
      renderCards();
    }
  });

  // Move first card to the bottom
  downCard.addEventListener("click", () => {
    let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (allTasks.length === 0) return;
    
    console.log("I down the cards");
    if (allTasks.length > 1) {
      const first = allTasks.shift();
      allTasks.push(first);
      localStorage.setItem("tasks", JSON.stringify(allTasks));
      renderCards();
    }
  });
})();

// 7:06
