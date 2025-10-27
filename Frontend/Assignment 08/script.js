let h1 = document.querySelector("h1");
let p = document.querySelector("p");

const handleKeyPress = (dets) => {
  let key = dets.key;

  if (key === " ") {
    h1.textContent = "Space";
    p.textContent += key;
  } else {
    h1.textContent = key;

    if (key === "Backspace") {
      p.textContent = p.textContent.slice(0, -1);
    } else if (
      key !== "Shift" &&
      key !== "Alt" &&
      key !== "CapsLock" &&
      key !== "Tab" &&
      key !== "Meta" &&
      key !== "Enter" &&
      key !== "Control"
    ) {
      p.textContent += key;
    }
  }
};

window.addEventListener("keydown", handleKeyPress);
