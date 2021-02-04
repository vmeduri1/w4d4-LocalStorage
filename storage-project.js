window.addEventListener("DOMContentLoaded", (event) => {

  const storeItem = () => {
    const addCart = document.getElementById("add-to-cart");
    addCart.addEventListener("click", (event) => {
      const select = document.getElementById("items").value;
      const input = document.getElementById('quantity').value;
      if(input !== '') {
        localStorage.setItem(select, input)
      }
      // localStorage.setItem(select, input)
    });
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
      //Remove Button
      const button = document.createElement('button');
      button.innerHTML = 'Remove';
      button.setAttribute('class', 'Remove')
      basketItem.appendChild(button);

    }
  };


  const removeItem = () => {
   const removeButtons = document.querySelectorAll('.Remove');
   removeButtons.forEach(function(button) {
     button.addEventListener('click', (event) => {
       const parentID = event.target.parentNode.id;
       localStorage.removeItem(parentID);
       location.reload();
       showCart();
     });
   });
  };

  storeItem();
  removeItem();
});
