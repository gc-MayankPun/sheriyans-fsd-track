import createCard from "./createCardFunc.js";

const handleSubmit = (event) => {
  event.preventDefault();

  let username = event.target.username.value.trim();
  let occupation = event.target.occupation.value.trim();
  let bio = event.target.bio.value.trim();
  let pfp = event.target.pfp.value.trim();

  if (username && occupation && bio && pfp) {
    createCard(username, occupation, bio, pfp);
    event.target.reset();
  } else {
    alert("Form shouldn't be empty!");
  }
};

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
