import { createContext, useState, useContext, useEffect } from "react";
import { VscChevronUp, VscChevronDown, VscClose } from "react-icons/vsc";

// Create Context
const CartContext = createContext();

// CartProvider Component to wrap the root of the app (or part of the component tree)
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // Update localStorage whenever the cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart"); // Remove from localStorage if cart is empty
    }
  }, [cart]);

  // Add product to the cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // Only update the cart if the product is already there
      existingProduct.quantity += 1;
      setCart([...cart]); // Update cart state
    } else {
      // Add a new product with quantity set to 1
      product.quantity = 1;
      setCart([...cart, product]);
    }
  };

  // Remove product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  // Update quantity of a product in the cart
  const updateQuantity = (productId, action) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        if (action === "add") item.quantity += 1;
        if (action === "subtract" && item.quantity > 1) item.quantity -= 1;
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Get total items count
  const getCartItemsCount = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart
      .reduce(
        (total, item) =>
          total + parseFloat(item.price.replace("$", "")) * item.quantity,
        0
      )
      .toFixed(2); // Return total as a string with two decimal points
  };

  // Function to show the items inside the cart (HTML/JSX representation)
  const showCartItems = () => {
    if (cart.length === 0) {
      return <p>Your cart is empty.</p>;
    }

    return (
      <table className="cart-table">
        <thead>
          <tr className="cart-product-row">
            <th className="table-data first-element">Product</th>
            <th className="table-data">Price</th>
            <th className="table-data">Quantity</th>

            <th className="table-data last-element">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr className="cart-product-row" key={item.id}>
              <td className="table-data first-element photo-item">
                <VscClose
                  className="x-icon"
                  onClick={() => removeFromCart(item.id)}
                />

                <img className="cart-row-image" src={item.image}></img>
                {item.name}
              </td>
              <td className="table-data">{item.price}</td>
              <td className="table-data">
                <div className="operation-box">
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <span className="operations-quantity">
                    <VscChevronUp
                      className="operation-btn"
                      onClick={() => updateQuantity(item.id, "add")}
                    />

                    <VscChevronDown
                      className="operation-btn"
                      onClick={() => updateQuantity(item.id, "subtract")}
                      disabled={item.quantity === 1}
                    />
                  </span>
                </div>
              </td>

              <td className="table-data">
                $
                {(
                  parseFloat(item.price.replace("$", "")) * item.quantity
                ).toFixed(2)}
              </td>
              <td className="table-data last-element"></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartItemsCount,
        calculateTotal,
        showCartItems, // Add the function to show cart items
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the Cart context
export const useCart = () => {
  return useContext(CartContext);
};
