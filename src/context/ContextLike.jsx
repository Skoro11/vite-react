import { createContext, useState, useContext, useEffect } from "react";

// Create Context for Like List
const LikeContext = createContext();

// LikeProvider Component to wrap the root of the app (or part of the component tree)
export const LikeProvider = ({ children }) => {
  const [likeList, setLikeList] = useState([]);

  // Load like list from localStorage when the component mounts
  useEffect(() => {
    const storedLikeList = JSON.parse(localStorage.getItem("likeList"));
    if (storedLikeList) {
      setLikeList(storedLikeList);
    }
  }, []);

  // Update localStorage whenever the likeList changes
  useEffect(() => {
    if (likeList.length > 0) {
      localStorage.setItem("likeList", JSON.stringify(likeList));
    } else {
      localStorage.removeItem("likeList"); // Remove from localStorage if like list is empty
    }
  }, [likeList]);

  // Add product to the like list or remove it if already present
  const addToLike = (product) => {
    const existingProduct = likeList.find((item) => item.id === product.id);
    if (existingProduct) {
      // If the product is already liked, remove it from the like list
      setLikeList(likeList.filter((item) => item.id !== product.id));
    } else {
      // Add the product to the like list
      setLikeList([...likeList, product]);
    }
  };

  // Clear the like list
  const clearLike = () => {
    setLikeList([]);
  };

  // Get total items count in the like list
  const getLikeItemsCount = () => {
    return likeList.length; // Just count the items in the like list, no need to sum quantities
  };

  // Function to show the items inside the like list (HTML/JSX representation)
  const showLikeItems = () => {
    if (likeList.length === 0) {
      return <p>Your like list is empty.</p>;
    }

    return (
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {likeList.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => addToLike(item)}>
                  {likeList.find((likeItem) => likeItem.id === item.id)
                    ? "Remove"
                    : "Add to Like"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <LikeContext.Provider
      value={{
        likeList,
        addToLike,
        clearLike,
        getLikeItemsCount,
        showLikeItems,
      }}
    >
      {children}
    </LikeContext.Provider>
  );
};

// Custom hook to access the Like context
export const useLike = () => {
  return useContext(LikeContext);
};
