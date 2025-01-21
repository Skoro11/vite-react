import { createContext, useState, useContext, useEffect } from "react";

// Create Context for Watchlist
const WatchlistContext = createContext();

// WatchlistProvider Component to wrap the root of the app (or part of the component tree)
export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  // Load watchlist from localStorage when the component mounts
  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem("watchlist"));
    if (storedWatchlist) {
      setWatchlist(storedWatchlist);
    }
  }, []);

  // Update localStorage whenever the watchlist changes
  useEffect(() => {
    if (watchlist.length > 0) {
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    } else {
      localStorage.removeItem("watchlist"); // Remove from localStorage if watchlist is empty
    }
  }, [watchlist]);

  // Add product to the watchlist or remove it if already present
  const addToWatchlist = (product) => {
    const existingProduct = watchlist.find((item) => item.id === product.id);
    if (existingProduct) {
      // If the product is already in the watchlist, remove it
      setWatchlist(watchlist.filter((item) => item.id !== product.id));
    } else {
      // Add the product to the watchlist
      setWatchlist([...watchlist, product]);
    }
  };

  // Clear the watchlist
  const clearWatchlist = () => {
    setWatchlist([]);
  };

  // Get total items count in the watchlist
  const getWatchlistItemsCount = () => {
    return watchlist.length; // Just count the items in the watchlist
  };

  // Function to show the items inside the watchlist (HTML/JSX representation)
  const showWatchlistItems = () => {
    if (watchlist.length === 0) {
      return <p>Your watchlist is empty.</p>;
    }

    return (
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {watchlist.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => addToWatchlist(item)}>
                  {watchlist.find(
                    (watchlistItem) => watchlistItem.id === item.id
                  )
                    ? "Remove from Watchlist"
                    : "Add to Watchlist"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        addToWatchlist,
        clearWatchlist,
        getWatchlistItemsCount,
        showWatchlistItems,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

// Custom hook to access the Watchlist context
export const useWatchlist = () => {
  return useContext(WatchlistContext);
};
