const nameImput = document.getElementById(`name-input`);
const nameOutput = document.getElementById(`name-output`);

nameImput.addEventListener(`input`, () => {
  let inputValue = nameImput.value.trim();
  if (inputValue === ``) {
    nameOutput.textContent = `Anonymous`;
  } else {
    nameOutput.textContent = inputValue;
  }
});
