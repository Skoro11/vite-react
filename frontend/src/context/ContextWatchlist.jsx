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

  // Clear the entire watchlist
  const clearWatchlist = () => {
    setWatchlist([]); // Reset the watchlist to an empty array
  };

  // Get total items count in the watchlist
  const getWatchlistItemsCount = () => {
    return watchlist.length; // Return the count of items in the watchlist
  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        addToWatchlist,
        clearWatchlist,
        getWatchlistItemsCount,
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
