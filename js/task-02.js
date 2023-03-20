const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById("ingredients");

ingredients.forEach(ingredient => {
  const li = document.createElement("li");
  li.innerText = ingredient;
  li.className = "item";
  ul.appendChild(li);
});






// const list = document.querySelector('#ingredients');

// for (let ingredient = 0; ingredient< ingredients.length; ingredient += 1) {
//   let item = document.createElement("li");
//   item.innerText = ingredients[ingredient];
//   item.classList.add("item");
//   list.append(item);
// }

