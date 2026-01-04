let button = document.querySelector("button");
let video = document.querySelector("video");

let seconds = 5;
let count = 0;

// Preload video
video.load();
video.muted = true;

let interval = setInterval(() => {
  if (count <= 99) {
    count++;
    document.querySelector(".progress-bar").style.width = `${count}%`;
    document.querySelector(".percent").textContent = `${count}%`;
  } else {
    document.querySelector("h3").style.display = "none";
    document.querySelector(".percent").textContent = "Completed 🥰";
    document.querySelector(".progress-container").style.display = "none";
    button.style.display = "block";
    clearInterval(interval);
  }
}, (seconds * 1000) / 100);

// Play video
button.addEventListener("click", () => {
  document.querySelector(".glass-box").style.display = "none";
  document.querySelector(".show").style.display = "block";

  video.muted = false;
  video.play();
});

// close video
document.querySelector("#close").addEventListener("click", function () {
  video.pause();
  video.currentTime = 0;
  document.querySelector(".show").style.display = "none";
  document.querySelector(".glass-box").style.display = "flex";
});
