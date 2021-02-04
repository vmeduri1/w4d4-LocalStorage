window.addEventListener("DOMContentLoaded", (event) => {

  const select = document.getElementById("items");
  console.log(select);
  console.log(select.value);
  const input = document.getElementById('quantity');
  // const quality = document.

  const form = document.querySelector("form");
  console.log(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value > 0) {
      storeItem();
    }
  });
  const storeItem = () => {
    localStorage.setItem(`${select.value}`, input.value);
  };

  // const showCart = () => {

  // };
  // showCart();

console.log(localStorage);

const div = document.getElementById('shopping-cart');
const li = document.createElement('li');
const h2 = document.getElementsByTagName('h2');
form.addEventListener('submit', event => {
  console.log(li);
console.log(div)
li.setAttribute('id', 'li');
document.body.appendChild('li')
})


for(let key in localStorage) {
  console.log(key, localStorage[key])
  li.innerHTML = `${key}: ${localStorage[key]}`
}
  // const removeItem = () => {

  // };

});
