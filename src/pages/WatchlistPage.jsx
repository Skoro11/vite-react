import { useWatchlist } from "../context/ContextWatchlist"; // Adjust the import path accordingly

const WatchlistPage = () => {
  const { showWatchlistItems, clearWatchlist } = useWatchlist();

  return (
    <div className="watchlist-container">
      <h2>Your Watchlist</h2>
      <div className="watchlist-table">{showWatchlistItems()}</div>
      <button onClick={clearWatchlist}>Clear Watchlist</button>
    </div>
  );
};

export default WatchlistPage;
