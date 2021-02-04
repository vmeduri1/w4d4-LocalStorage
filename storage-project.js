window.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  const select = document.getElementById("items");
  // console.log(select);
  // console.log(select.value);
  const input = document.getElementById('quantity');
  // const quality = document.

  const form = document.querySelector("form");
  // console.log(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    showCart();
    storeItem();

  });
  const storeItem = () => {
    localStorage.setItem(`${select.value}`, input.value);
    // showCart();
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
      //Remove Button
      const button = document.createElement('button');
      button.innerHTML = 'Remove';
      basketItem.appendChild(button);

    }
  };







  const removeItem = () => {
    Storage.removeItem(key)
    button.addEventListener('click', (event) => {
      removeItem()
    })
  };

});
