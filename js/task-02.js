const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById("ingredients");
const array = [];

ingredients.forEach(ingredient => {
  const li = document.createElement("li");
  li.innerText = ingredient;
  li.className = "item";
  array.push(li);
});

ul.append(...array);



// const ingredientsList = document.querySelector('#ingredients');
 
//  const ingredientItems = ingredients.map(ingredient => { 
//    const item = document.createElement('li'); 
//    item.textContent = ingredient; 
//    item.classList.add('item'); 
//    return item; 
//  }); 
  
//  ingredientsList.append(...ingredientItems);


// const list = document.querySelector('#ingredients');
// const array = [];

// for (let i = 0; i< ingredients.length; i += 1) {
//   let item = document.createElement("li");
//   item.innerText = ingredients[i];
//   item.classList.add("item");
//   array.push(item);
// }
// list.append(...array);
