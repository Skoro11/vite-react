import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carousel.css"; // Custom CSS for styling
import Clock from "../components/Clock";
import RenderStars from "../components/RenderStars";
import GetTag from "../components/Tags";
import { useCart } from "../context/ContextCart";
import { useLike } from "../context/ContextLike";
import { useWatchlist } from "../context/ContextWatchlist";

function TestCarousel() {
  const sliderRef = useRef(null);
  const { days, hours, minutes, seconds } = Clock();
  const { addToCart } = useCart();
  const { addToLike, likeList } = useLike();
  const { addToWatchlist, watchlist } = useWatchlist();
  const [flashSaleProducts, setFlashSaleProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products");
        const products = response.data;
        const filteredProducts = products.filter(
          (product) => product.specialCategory === "Flash Sales"
        );
        setFlashSaleProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    swipe: true,
    touchMove: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 4 } },
      { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 425, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    ],
  };

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();
  const isLiked = (id) => likeList.some((item) => item.id === id);
  const isInWatchlist = (id) => watchlist.some((item) => item.id === id);

  return (
    <div className="mg-top-50-sides-30-bottom-0">
      <div className="width-1170 mg-inline">
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
                  <th>Days</th><th></th>
                  <th>Hours</th><th></th>
                  <th>Minutes</th><th></th>
                  <th>Seconds</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{days}</td><td>:</td>
                  <td>{hours}</td><td>:</td>
                  <td>{minutes}</td><td>:</td>
                  <td>{seconds}</td>
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
      </div>
      <div className="slider-container carousel-wrapper-product-line">
        <Slider ref={sliderRef} {...settings}>
          {flashSaleProducts.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <img src={product.image} alt={product.name} />
                <button className="addTo-cart" onClick={() => addToCart(product)}>
                  Add To Cart
                </button>
                <div className="product-tag">{GetTag(product.tag)}</div>
                <img
                  src={isLiked(product.id) ? "heart-fill.png" : "heart-empty.png"}
                  className="like-icon"
                  onClick={() => addToLike(product)}
                  style={{ cursor: "pointer" }}
                />
                <img
                  src={isInWatchlist(product.id) ? "eye-fill.png" : "eye-empty.png"}
                  className="watchlist-icon"
                  onClick={() => addToWatchlist(product)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="product-info mg-inline">
                <span className="product-name">
                  <a href={`/product/${product.slug}/${product.id}`}>{product.name}</a>
                </span>
                <p className="product-description">
                  <span className="full-price">{product.price}</span>
                  <span className="discounted-price">{product.discountedPrice}</span>
                </p>
                <div className="stars">
                  <RenderStars stars={product.stars} />
                  <span className="reviews-number">({product.numOfReviews})</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <a href="/all"><button className="view-all">View all</button></a>
    </div>
  );
}

export default TestCarousel;
