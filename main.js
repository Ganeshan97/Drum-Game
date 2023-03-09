window.addEventListener("keydown", function (e) {
  const sound = document.body.querySelector(`audio[data-key="${e.key}"]`);
  const keyStyle = document.body.querySelector(`.key[data-key="${e.key}"]`);

  if (!sound) return;
  sound.currentTime = 0;
  sound.play();

  keyStyle.classList.add("playing");
});

const keys = document.body.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("transitionend", removeStyle);
});

function removeStyle(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
