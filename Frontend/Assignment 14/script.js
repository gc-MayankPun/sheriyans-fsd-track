// An IIFE that handles the switching mode
(() => {
  const addNote = document.querySelector("#add-control");
  const closeNote = document.querySelector("#close-note");
  const formContainer = document.querySelector(".form-container");
  const noteContainer = document.querySelector(".note-container");

  addNote.addEventListener("click", () => {
    formContainer.style.display = "none";
    noteContainer.style.display = "flex";
  });
  closeNote.addEventListener("click", () => {
    formContainer.style.display = "flex";
    noteContainer.style.display = "none";
  });
})(); 

const noteContainerForm = document.querySelector(".note-container form");
noteContainerForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
