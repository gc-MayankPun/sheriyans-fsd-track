import { showError } from "./showError.js";

// Username Validation
export const usernameValidation = (username) => {
  let trimmedValue = username.value.trim();

  if (!trimmedValue) {
    showError(username, "Username is required");
    return false;
  } else if (trimmedValue.length < 3) {
    showError(username, "Username must be at least 3 characters long.");
    return false;
  } else if (trimmedValue.length > 15) {
    showError(username, "Username must not be more than 15 characters long.");
    return false;
  } else {
    showError(username, "");
    return true;
  }
};

// Occupation Validation
export const occupationValidation = (occupation) => {
  if (!occupation.value.trim()) {
    showError(occupation, "Occupation is required");
    return false;
  } else {
    showError(occupation, "");
    return true;
  }
};

// Bio Validation
export const bioValidation = (bio) => {
  let trimmedValue = bio.value.trim();

  if (!trimmedValue) {
    showError(bio, "Bio is required");
    return false;
  } else if (trimmedValue.length > 30) {
    showError(bio, "Bio is too long...");
    return false;
  } else {
    showError(bio, "");
    return true;
  }
};

// Profile Picture Validation
export const pfpValidation = (pfp) => {
  if (!pfp.value.trim()) {
    showError(pfp, "Profile pic is required");
    return false;
  } else {
    showError(pfp, "");
    return true;
  }
};
