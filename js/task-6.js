function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// function createBoxes(amount) {
//   const boxesContainer = document.getElementById(`boxes`);

//   boxesContainer.innerHTML = ``;

//   const boxes = [];
//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement(`div`);

//     const size = 30 + i * 10;
//     box.style.width = `${size}px`;
//     box.style.heght = `${size}px`;

//     box.style.backgroundColor = getRandomHexColor();

//     boxes.push(box);
//   }

//   boxesContainer.append(...boxes);
// }

// function destroyBoxes() {
//   const boxesContainer = document.getElementById(`boxes`);
//   boxesContainer.innerHTML = ``;
// }

// const createButton = document.querySelector(`[data-create]`);
// const destroyButton = document.querySelector(`[data-destroy]`);
// const input = document.querySelector(`input[type="number"]`);

// createButton.addEventListener(`click`, () => {
//   const amount = parseInt(input.value);

//   if (amount >= 1 && amount <= 100) {
//     createBoxes(amount);
//   } else {
//     alert(`Please enter a number between 1 and 100`);
//   }

//   input.value = ``;
// });

// destroyButton.addEventListener(`click`, destroyBoxes);

// createBtnEl.addEventListener("click", () => {
//   if (
//     Number(inputNumberEl.value.trim()) > Number(inputNumberEl.max) ||
//     Number(inputNumberEl.value.trim()) < Number(inputNumberEl.min)
//   ) {
//     alert("Please enter number from 1 to 100");
//   } else {
//     createBoxes(inputNumberEl.value.trim());
//   }
//   inputNumberEl.value = "";
// });

// destroyBtnEl.addEventListener("click", destroyBoxes);

// function destroyBoxes() {
//   inputNumberEl.value = "";
//   divBoxesEl.innerHTML = "";
// }

// function createBoxes(amount) {
//   let size = 30;
//   const boxesArr = [];
//   for (let i = 0; i < amount; i += 1) {
//     size += 10 * i;
//     const div = `<div class="item" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
//     boxesArr.push(div);
//   }
//   divBoxesEl.insertAdjacentHTML("beforeend", boxesArr.join(""));
// }

const controls = document.querySelector("controls");
const inputNumberEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const divBoxesEl = document.getElementById("boxes");
divBoxesEl.style.display = "flex";
divBoxesEl.style.flexWrap = "wrap";
divBoxesEl.style.alignItems = "center";
divBoxesEl.style.marginTop = "30px";

createBtnEl.addEventListener("click", () => {
  //console.log(inputNumberEl.value);
  if (
    Number(inputNumberEl.value.trim()) > Number(inputNumberEl.max) ||
    Number(inputNumberEl.value.trim()) < Number(inputNumberEl.min)
  ) {
    alert("Please enter number from 1 to 100");
  } else {
    createBoxes(inputNumberEl.value.trim());
  }
  inputNumberEl.value = "";
});

destroyBtnEl.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  inputNumberEl.value = "";
  divBoxesEl.innerHTML = "";
}

function createBoxes(amount) {
  let size = 30;
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10 * i;
    const div = `<div class="item" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArr.push(div);
  }
  divBoxesEl.insertAdjacentHTML("beforeend", boxesArr.join(""));
}
