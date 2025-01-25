import "./ProductUrl.css";

function ProductUrl() {
  return (
    <div className="product-container">
      <div className="left-sidebar">
        <img src="Products/bag.png" /> <img src="Products/bag.png" />{" "}
        <img src="Products/bag.png" /> <img src="Products/bag.png" />
      </div>
      <div className="main-image">
        <img src="Products/bag.png" />
      </div>

      <div className="product-info">
        <div className="product-name-product">
          <h2>Havic HV G-92 Gamepad</h2>
          <img src="heart-empty.png" />
        </div>
        <div className="stars-stock">
          <img src="full-star.png" alt="" />
          <img src="full-star.png" alt="" />
          <img src="full-star.png" alt="" />
          <img src="full-star.png" alt="" />
          <img src="full-star.png" alt="" />
          (150 Reviews) | <span className="green">In Stock</span>
        </div>
        <div className="price-product-description">150$</div>
        <div className="product-description-product">
          High-quality dry dog food specially formulated for specific breeds.
          Packed with essential nutrients to keep your pet healthy and strong.
        </div>
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
              <img src="delivery.png" />
              <div>
                <span className="delivery">Free Delivery</span>
                <br />
                <span className="details">
                  Enter your postal code for Delivery Availability
                </span>
              </div>
            </div>

            <div className="flexed">
              <img src="return.png" />
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
