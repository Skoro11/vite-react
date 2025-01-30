import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../components/Products"; // Import the product list
import { useCart } from "../context/ContextCart";
import { useLike } from "../context/ContextLike";
import "./ProductUrl.css";

function ProductUrl() {
  const { slug, id } = useParams(); // Get slug and id from the URL
  const [product, setProduct] = useState(null); // State to hold the product data
  const { addToCart } = useCart();
  const { addToLike, likeList } = useLike();
  // Function to check if a product is already liked
  const isLiked = (productId) => {
    return likeList.some((item) => item.id === productId);
  };
  useEffect(() => {
    // Find the product based on the slug and id
    const fetchedProduct = products.find(
      (product) => product.slug === slug && product.id === parseInt(id)
    );
    setProduct(fetchedProduct);
  }, [slug, id]); // Re-run when slug or id changes

  if (!product) {
    return <div>Loading...</div>; // Show loading while fetching product
  }

  return (
    <div className="product-container">
      <div className="left-sidebar">
        <img src={product.image} alt={product.name} />
        <img src={product.image} alt={product.name} />
        <img src={product.image} alt={product.name} />
        {/* You can add more product images here if available */}
      </div>
      <div className="main-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info-info">
        <div className="product-name-product">
          <h2>{product.name}</h2>
          <img
            src={isLiked(product.id) ? "heart-fill.png" : "heart-empty.png"} // Replace with your icon paths
            onClick={() => {
              addToLike(product); // This will add or remove from the like list
            }}
            style={{ cursor: "pointer" }} // Add pointer cursor to indicate it's clickable
          />
        </div>
        <div className="stars-stock">
          {/* Assuming product.stars is an array or number */}
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={index < product.stars ? "full-star.png" : "empty-star.png"}
              alt="star"
            />
          ))}
          ({product.numOfReviews} Reviews) |{" "}
          <span className="green">In Stock</span>
        </div>
        <div className="price-product-description">{product.price}</div>
        <div className="product-description-product">{product.description}</div>

        <div className="flex-container">
          <button
            className="buy-btn mb-10"
            onClick={() => {
              addToCart(product); // Add the product to the cart
            }}
          >
            Add to Cart
          </button>
        </div>
        <div className="services-container">
          <div className="services">
            <div className="flexed padding-3 bottom-underline">
              <img src="delivery.png" alt="delivery" />
              <div>
                <span className="delivery">Free Delivery</span>
                <br />
                <span className="details">
                  Enter your postal code for Delivery Availability
                </span>
              </div>
            </div>

            <div className="flexed padding-3">
              <img src="return.png" alt="return" />
              <div>
                <span className="delivery">Return Delivery</span>
                <br />
                <span className="details">Free 30 Days Delivery Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductUrl;
