import "./Banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <img src="bannerTwo.png" />
      <ul className="banner-info">
        <li className="banner-categories">Categories</li>
        <li className="banner-header">
          Enhance Your <br />
          Music Experience
        </li>
        <li>
          <div className="clock-banner">
            <span className="flexed-info-banner">
              <span className="number-banner">05</span>
              <span>Days</span>
            </span>
            <span className="flexed-info-banner">
              <span className="number-banner">23</span>
              <span>Hours</span>
            </span>

            <span className="flexed-info-banner">
              <span className="number-banner">59</span>
              <span>Minutes</span>
            </span>
            <span className="flexed-info-banner">
              <span className="number-banner">35</span>
              <span>Seconds</span>
            </span>
          </div>
        </li>
        <li>
          <button className="banner-btn">Buy Now</button>
        </li>
      </ul>
    </div>
  );
}

export default Banner;
