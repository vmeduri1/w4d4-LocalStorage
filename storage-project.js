window.addEventListener("DOMContentLoaded", (event) => {

  const select = document.getElementById("items");
  console.log(select);
  console.log(select.value);
  const input = document.getElementById('quantity');
  // const quality = document.

  const form = document.querySelector("form");
  console.log(form);

  form.addEventListener("click", (event) => {
    event.preventDefault();
    if (input.value > 0) {
      storeItem();
    }
  });
  const storeItem = () => {
    localStorage.setItem(`${select.value}`, input.value);
  };

  const showCart = () => {
    for (let keys in localStorage) {
      console.log(keys);
    }
    // localStorage.getItem()
  };
  showCart();
  // const removeItem = () => {

  // };

});
