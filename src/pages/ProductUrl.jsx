import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../components/Products"; // Import the product list

import "./ProductUrl.css";

function ProductUrl() {
  const { slug, id } = useParams(); // Get slug and id from the URL
  const [product, setProduct] = useState(null); // State to hold the product data
  const basePath = window.location.origin; // This gets the base path (i.e., the domain + root)

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
          <img src="heart-empty.png" alt="Like" />
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
        <div className="colors">
          Colors: <span className="circle red"></span>
          <span className="circle blue"></span>
        </div>

        <div className="flex-container">
          <button className="buy-btn">Add to Cart</button>
        </div>
        <div className="services-container">
          <div className="services">
            <div className="flexed bottom-underline">
              <img src="delivery.png" alt="delivery" />
              <div>
                <span className="delivery">Free Delivery</span>
                <br />
                <span className="details">
                  Enter your postal code for Delivery Availability
                </span>
              </div>
            </div>

            <div className="flexed">
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
