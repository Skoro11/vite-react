import "../styles/NewArrival.css";
function NewArrival() {
  return (
    <section>
      <div className="carousel-wrapper">
        <div className="heading-description">
          <span className="orange orange-span"></span>
          <div className="orange orange-text">Featured</div>
        </div>
        <div className="heading-clock">
          {" "}
          <h1>New Arrival</h1>
        </div>

        <div className="grid-container">
          <div className="item1">
            <img src="ps5.png" />
            <ul className="absolute-arrival">
              <li className="arrival-heading">PlayStation 5</li>
              <li className="arrival-description">
                Black and White version of the PS5 coming out on sale.
              </li>
              <li>
                <button className="arrival-btn">Shop Now</button>
              </li>
            </ul>
          </div>
          <div className="item2">
            <img src="women.png" />{" "}
            <ul className="absolute-arrival">
              <li className="arrival-heading">Women’s Collections</li>
              <li className="arrival-description">
                Featured woman collections that give you another vibe.
              </li>
              <li>
                <button className="arrival-btn">Shop Now</button>
              </li>
            </ul>
          </div>
          <div className="item3">
            <img src="speakers.png" />
            <ul className="absolute-arrival">
              <li className="arrival-heading">Speakers</li>
              <li className="arrival-description">Amazon wireless speakers</li>
              <li>
                <button className="arrival-btn">Shop Now</button>
              </li>
            </ul>
          </div>
          <div className="item4">
            <img src="gucci.png" />
            <ul className="absolute-arrival">
              <li className="arrival-heading">Perfume</li>
              <li className="arrival-description">GUCCI INTENSE OUD EDP</li>
              <li>
                <button className="arrival-btn">Shop Now</button>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default NewArrival;
