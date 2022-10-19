const body = document.querySelector("body");
const audioPanel = document.querySelector("#audioPanel");
const playButton = document.querySelector("#playButton");
const audio = new Audio("./minecraft.mp3");

let playSound = false;
let panelVisible;

const playAudio = () => {
  playSound = !playSound;
  if (playSound) {
    audio.play();
    playButton.textContent = "II";
  } else {
    audio.pause();
    playButton.textContent = "▶";
  }
};

const adjustVolume = (value) => {
  audio.volume = value / 100;
};

playButton.addEventListener("click", playAudio);
playButton.addEventListener("touchend", playAudio);
