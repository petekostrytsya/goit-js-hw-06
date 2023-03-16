let counterValue = 0;

const valueElement = document.querySelector('#value');

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

function increment() {
  counterValue += 1;
  valueElement.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  valueElement.textContent = counterValue;
}