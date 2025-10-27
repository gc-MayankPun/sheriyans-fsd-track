let button = document.querySelector("button");
let video = document.querySelector("video");

let seconds = 5;
let count = 0;

// Load the video already to prevent playback issue
video.load();
video.muted = true;

let interval = setInterval(() => {
  if (count <= 99) {
    count++;
    document.querySelector(".progress-bar").style.width = `${count}%`;
    document.querySelector(".percent").textContent = `${count}%`;
  } else {
    document.querySelector("h3").style.display = "none";
    button.style.display = "block";
    clearInterval(interval);
  }
}, (seconds * 1000) / 100);

button.addEventListener("click", () => {
  document.querySelector(".glass-box").style.display = "none";
  document.querySelector(".show").style.display = "block";

  video.muted = false;
  video.play();
});
