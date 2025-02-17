import "./AllProductPage.css"
import { products } from "../components/Products";
import RenderStars from "../components/RenderStars";
import GetTag from "../components/Tags";
import { useCart } from "../context/ContextCart";
import { useLike } from "../context/ContextLike";
import { useWatchlist } from "../context/ContextWatchlist";



 
  const AllProducts = products
function AllProductsPage(){
    const { addToCart } = useCart();
    const { addToLike, likeList } = useLike(); 
    const { addToWatchlist, watchlist } = useWatchlist();
// Function to check if a product is already liked
const isLiked = (productId) => {
    return likeList.some((item) => item.id === productId);
  };

  // Function to check if a product is in the watchlist
  const isInWatchlist = (productId) => {
    return watchlist.some((item) => item.id === productId);
  };





    return(
        <section className="width-1170 mg-inline mg-top-5">
            <div className="heading-description">
          <span className="orange orange-span"></span>
          <div className="orange orange-text">All Items</div>
        </div>
        <h1 className="mg-top-1">All items</h1>
        <div className="flex flex-wrap space-between mg-vertical-2">
        {AllProducts.map((product) => (
            <div className="custom-card" key={product.id}>
              <div className="relative">
                <img src={product.image} alt={product.name} />

                <button
                  className="addTo-cart"
                  onClick={() => {
                    addToCart(product); // Add the product to the cart
                  }}
                >
                  Add To Cart
                </button>

                <div className="product-tag">{GetTag(product.tag)}</div>
                {/* Image based Like button */}
                <img
                  src={
                    isLiked(product.id) ? "heart-fill.png" : "heart-empty.png"
                  } // Replace with your icon paths
                  className="like-icon"
                  onClick={() => {
                    addToLike(product); // This will add or remove from the like list
                  }}
                  style={{ cursor: "pointer" }} // Add pointer cursor to indicate it's clickable
                />

                {/* Watchlist button */}
                <img
                  src={
                    isInWatchlist(product.id)
                      ? "eye-fill.png" // Icon for "Remove from Watchlist"
                      : "eye-empty.png" // Icon for "Add to Watchlist"
                  }
                  className="watchlist-icon"
                  onClick={() => {
                    addToWatchlist(product); // This will add or remove from the watchlist
                  }}
                  style={{ cursor: "pointer" }}
                />
              </div>

              <div className="product-info ">
                <span className="product-name">
                  <a href={`/product/${product.slug}/${product.id}`}>
                    {product.name}
                  </a>
                </span>
                <p className="product-description">
                  <span className="full-price">{product.price}</span>
                  <span className="discounted-price">
                    {product.discountedPrice}
                  </span>
                </p>
                <div className="stars">
                  <RenderStars stars={product.stars} />
                  <span className="reviews-number">{`(${product.numOfReviews})`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        </section>
    )
}
export default AllProductsPage;