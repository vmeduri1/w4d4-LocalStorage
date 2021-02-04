window.addEventListener("DOMContentLoaded", (event) => {

  const select = document.getElementById("items");
  // console.log(select);
  // console.log(select.value);
  const input = document.getElementById('quantity');
  // const quality = document.

  const form = document.querySelector("form");
  // console.log(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    storeItem();
    localStorage.removeItem(event.target.id);
  });
  const storeItem = () => {
    localStorage.setItem(`${select.value}`, input.value);
    showCart();
  };

  const showCart = () => {
    const cart = document.getElementById("shopping-cart");
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      const basketItem = document.createElement('div');
      basketItem.innerHTML = key + ": " + value;
      basketItem.setAttribute("id", key);
      cart.appendChild(basketItem);
    }
  };

  // showCart();

console.log(localStorage);


  const removeItem = () => {
    showCart();
  };

});
