
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onNameInput);

function onNameInput(event) {
    const value = event.target.value;
    nameOutput.textContent = value ? value : 'Anonymous';
}
  
// const inputEl = document.querySelector('#name-input');
// const outputEl = document.querySelector('#name-output');

// inputEl.addEventListener('input', (event) => {
//     const value = event.target.value;
// outputEl.textContent = value ? value : 'Anonymous';
// });