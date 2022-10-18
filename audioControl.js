const body = document.querySelector("body");
const audio = document.querySelector("#backgroundMusic");

body.addEventListener("click", () => {
  const audio = new Audio("./minecraft.mp3");
  audio.play();
});
