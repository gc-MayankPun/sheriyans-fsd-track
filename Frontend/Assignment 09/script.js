let btn = document.querySelector("#btn");
let inputFile = document.querySelector("#file");

btn.addEventListener("click", () => {
    inputFile.click();
});

inputFile.addEventListener("change", (dets) => {
  let targetFile = dets.target.files[0];

  if (targetFile) {
    btn.textContent = targetFile.name;
  }
});
