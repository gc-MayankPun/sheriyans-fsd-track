import createCard from "./scripts/createCardFunc.js";
import {
  bioValidation,
  occupationValidation,
  pfpValidation,
  usernameValidation,
} from "./scripts/inputValidation.js";

const handleSubmit = (event) => {
  event.preventDefault();

  let username = event.target.username;
  let occupation = event.target.occupation;
  let bio = event.target.bio;
  let pfp = event.target.pfp;

  let isValid =
    usernameValidation(username) &&
    occupationValidation(occupation) &&
    bioValidation(bio) &&
    pfpValidation(pfp);

  if (isValid) {
    createCard(
      username.value.trim(),
      occupation.value.trim(),
      bio.value.trim(),
      pfp.value.trim()
    );
    form.reset();
  }
};

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
