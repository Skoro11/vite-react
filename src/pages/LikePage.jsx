import { useLike } from "../context/ContextLike"; // Adjust the import path accordingly
import "./CartPage.css";
const LikePage = () => {
  const { showLikeItems, clearLike } = useLike();

  return (
    <div className="cart-container">
      <h2>Your Likes</h2>
      <div className="cart-table">{showLikeItems()}</div>
      <button onClick={clearLike}>Clear Likes</button>
    </div>
  );
};

export default LikePage;
