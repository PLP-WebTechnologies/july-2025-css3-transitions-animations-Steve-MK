/* ---------------------
  Global Scope Variable 
  this variable is accessible to all functions below
  and keeps track of the quantity selected
  it avoids placing an order for 0 items
  setting the minimum quantity to 1
--------------------- */
let quantity = 1;

/* ---------------------
  Functions with Parameters & Return Values
--------------------- */
function updateQuantity(qty) {
  document.getElementById('qty').textContent = qty;
  return qty;
}

function showNotification(message) {
  const notification = document.getElementById('cartNotification');
  notification.textContent = message;
  notification.classList.add('showNotification');

  // Small bounce animation for the button
  const btn = document.getElementById('addToCartBtn');
  btn.style.animation = 'bounce 0.3s';
  setTimeout(() => btn.style.animation = '', 300);

  setTimeout(() => {
    notification.classList.remove('showNotification');
  }, 1500);
}

/* ---------------------
  Quantity Buttons Event Listeners
  when clicked, they call updateQuantity with the new quantity,
  i.e plus or minus one
--------------------- */
document.getElementById('increaseQty').addEventListener('click', () => {
  quantity++;
  updateQuantity(quantity);
});

document.getElementById('decreaseQty').addEventListener('click', () => {
  if(quantity > 1) {
    quantity--;
    updateQuantity(quantity);
  }
});

/* ---------------------
  Add to Cart Button Event
--------------------- */
document.getElementById('addToCartBtn').addEventListener('click', () => {
  showNotification(`Added ${quantity} item(s) to cart!`);
});
