window.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault()
  // const showCart = () => {

  // };
  const select = document.getElementById("items");
  console.log(select);
  console.log(select.value);
  const input = document.getElementById('')
  // const quality = document.

  const form = document.querySelector("form ");
  const appleValue = localStorage.getItem('apple');
  // const bananaValue = localStorage.getItem('Banana');
  // const appleValue = localStorage.getItem('Cookie');
  // const appleValue = localStorage.getItem('Donut');
  // const appleValue = localStorage.getItem('Eggs');
  // const appleValue = localStorage.getItem('Falafel');
  // const appleValue = localStorage.getItem('Granola Bar');
  // const appleValue = localStorage.getItem('Hot Dog');
  // const appleValue = localStorage.getItem('Ice Cream Pint');
  // const appleValue = localStorage.getItem('Jalepeno');

  console.log(form);
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
