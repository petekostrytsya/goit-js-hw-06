const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

for (let ingredient = 0; ingredient< ingredients.length; ingredient += 1) {
  let item = document.createElement("li");
  item.innerText = ingredients[ingredient];
  item.classList.add("item");
  list.append(item);
}

