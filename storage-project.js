window.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault()
  // const showCart = () => {

  // };
  const select = document.getElementById("items");
  console.log(select);
  console.log(select.value);
  const form = document.querySelector(".form form__container");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.setItems(`${select.value}`, select.value);
  });
  const storeItem = () => {

  };
  storeItem();
  // const removeItem = () => {

  // };

});
