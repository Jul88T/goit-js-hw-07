function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function hexToRgb(hex) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

const button = document.querySelector(`.change-color`);
const colorSpan = document.querySelector(`.color`);

button.addEventListener(`click`, () => {
  const randomHexColor = getRandomHexColor();
  const randomRgbColor = hexToRgb(randomHexColor);

  document.body.style.backgroundColor = randomRgbColor;
  colorSpan.textContent = randomRgbColor;
});
