export const showError = (input, message) => {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = message;
  errorSpan.style.display = message ? "block" : "none";
};
