let cart = [];

// Function to add product to the cart
export function addToCart(product) {
  const existingProduct = cart.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1; // Increase quantity if already in cart
  } else {
    product.quantity = 1; // Set initial quantity to 1
    cart.push(product);
  }
  updateCart();
}

// Function to remove product from the cart
export function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

// Function to update product quantity in the cart
export function updateQuantity(productId, action) {
  const product = cart.find((item) => item.id === productId);
  if (product) {
    if (action === "add") {
      product.quantity += 1; // Increase quantity
    } else if (action === "subtract" && product.quantity > 1) {
      product.quantity -= 1; // Decrease quantity (prevent going below 1)
    }
    updateCart();
  }
}

// Function to calculate the total price of items in the cart
export function calculateTotal() {
  return cart
    .reduce(
      (total, item) =>
        total + parseFloat(item.price.replace("$", "")) * item.quantity,
      0
    )
    .toFixed(2); // Return total as a string with two decimal points
}

// Function to get the current cart items
export function getCartItems() {
  return cart;
}

// Function to clear the cart (optional if needed)
export function clearCart() {
  cart = [];
  updateCart();
}

// Function to update the cart UI and return a text with total item count
export function updateCart() {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return `Cart updated! Total items: ${totalItems}`; // Return the text with total items
}

// Function to show the items inside the cart
export function showCartItems() {
  if (cart.length === 0) {
    return "Your cart is empty.";
  }

  return cart.map((item) => (
    <div key={item.id} style={{ margin: "10px 0" }}>
      <p>
        <strong>{item.name}</strong> - {item.quantity} x {item.price} <br />
        <span>
          Subtotal: $
          {(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
        </span>
      </p>

      {/* Add buttons to update quantity */}
      <button onClick={() => updateQuantity(item.id, "add")}>+</button>
      <span>{item.quantity}</span>
      <button
        onClick={() => updateQuantity(item.id, "subtract")}
        disabled={item.quantity === 1} // Disable "Subtract" button if quantity is 1
      >
        -
      </button>

      {/* Button to remove item from the cart */}
      <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
    </div>
  ));
}
