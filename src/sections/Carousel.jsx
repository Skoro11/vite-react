import { /* useState, useEffect, */ useRef } from "react";
import Slider from "react-slick";
import { products } from "../components/Products"; // Import products from Products.jsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carousel.css"; // Custom CSS for styling
import Clock from "../components/Clock"; // Import Clock component
import RenderStars from "../components/RenderStars";
import GetTag from "../components/Tags";
import { useCart } from "../context/Context";

function Carousel() {
  const sliderRef = useRef(null);
  const { days, hours, minutes, seconds } = Clock();
  /*   const [scrollSensitivity, setScrollSensitivity] = useState(1);  */ // Sensitivity for mobile scrolls
  const { addToCart } = useCart();

  // Detecting swipe or scroll sensitivity
  /*   const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setScrollSensitivity(2); // Increase scroll sensitivity for next slides
    } else {
      setScrollSensitivity(1); // Return to normal sensitivity
    }
  };
 */
  /* useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel); // Cleanup event listener
    };
  }, []); */

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4, // Use dynamic scroll sensitivity
    arrows: false, // Disable default arrows
    swipe: true, // Enable swipe functionality
    touchMove: true, // Enable touch movement
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4, // Dynamic scroll on tablet
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3, // Dynamic scroll on mobile
        },
      },
    ],
  };

  // Move to the previous slide
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Move to the next slide
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="carousel-wrapper">
      <div className="heading-description">
        <span className="orange orange-span"></span>
        <div className="orange orange-text">Todays</div>
      </div>

      <div className="heading-section">
        <div className="heading-clock">
          <h1>Flash Sales</h1>
          <table>
            <thead>
              <tr>
                <th className="heading-clock">Days</th>
                <th></th>
                <th className="heading-clock">Hours</th>
                <th></th>
                <th className="heading-clock">Minutes</th>
                <th></th>
                <th className="heading-clock">Seconds</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="time-output">{days}</td>
                <td className="two-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </td>
                <td className="time-output">{hours}</td>
                <td className="two-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </td>
                <td className="time-output">{minutes}</td>
                <td className="two-dots">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </td>
                <td className="time-output">{seconds}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="custom-arrows">
          <div className="next-arrow" onClick={handlePrev}>
            <img src="arrow-black.png" alt="Next" />
          </div>
          <div className="prev-arrow" onClick={handleNext}>
            <img src="arrow-black.png" alt="Previous" />
          </div>
        </div>
      </div>

      {/* Slider Container */}
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {/* Dynamically map through the products */}
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <img src={product.image} alt={product.name} />
                {/* Add onClick handler for "Add to Cart" button */}
                <button
                  className="addTo-cart"
                  onClick={() => {
                    // Call your custom handler first
                    addToCart(product); // Then call addToCart function
                  }}
                >
                  Add To Cart
                </button>

                <div className="product-tag">{GetTag(product.tag)}</div>
              </div>

              <div className="product-info">
                <span className="product-name">{product.name}</span>
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
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
