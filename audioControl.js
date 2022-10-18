const body = document.querySelector("body");
const audio = document.querySelector("#backgroundMusic");

const playAudio = () => {
  const audio = new Audio("./minecraft.mp3");
  audio.play();
  body.removeEventListener("click", playAudio);
  body.removeEventListener("touchend", playAudio);
};

body.addEventListener("click", playAudio);
body.addEventListener("touchend", playAudio);
