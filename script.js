// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// const fruitListItems = fruits.map((fruit) => {
//   const listItem = document.createElement('li'); 
//   listItem.textContent = fruit;
//   return listItem;
// });

// console.log("fruitListItems: ", fruitListItems)
// console.log("fruitListItems after spread: ", ...fruitListItems)

// const fruitList = document.querySelector('ul');
// fruitList.append(...fruitListItems);  // why do we need to do this?

// console.log(fruitList);

// document.body.append(fruitList)



// Alternately:

const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

const fruitListItems = fruits.map((fruit) => {
  return `<li>${fruit}</li>`;
});

const fruitListString = fruitListItems.join('');
console.log("fruitListString:", fruitListString);

const fruitList = document.querySelector('ul');
fruitList.innerHTML = fruitListString  // Oh, no!!!!  Not Secure!
document.body.append(fruitList)






