import { useCart } from "../context/Context"; // Adjust the import path accordingly
import "./CartPage.css";
const CartPage = () => {
  const { showCartItems, calculateTotal, clearCart } = useCart();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-table">{showCartItems()}</div>
      <h3>Total: ${calculateTotal()}</h3>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
