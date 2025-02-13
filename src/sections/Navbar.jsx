import "../styles/Navbar.css";
import { useState } from "react";
import { useCart } from "../context/ContextCart";
import { useLike } from "../context/ContextLike";
import { VscEye } from "react-icons/vsc";
// Importing React Icons
import {
  FaCog,
  FaListAlt,
  FaRegWindowClose,
  FaStar,
  FaSignOutAlt,
} from "react-icons/fa";

function Navbar() {
  // State to toggle dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { getCartItemsCount } = useCart();
  const { getLikeItemsCount } = useLike();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar">
      <div className="sale">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span className="underlined">Shop now</span>
      </div>
      <div className="bordered">
        <div className="navbar__logo">
          <h1>
            <a href="/">Lexus</a>
          </h1>
        </div>

        <ul className="navbar__links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/about">Sign up</a>
          </li>
        </ul>

        <div className="navbar__right">
          <div className="navbar__search">
            <input
              type="text"
              placeholder="What are you looking for? "
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button type="submit" className="search-btn">
              <img src="search-icon.png" alt="Search icon" />
              {/* Search icon */}
            </button>
          </div>
          <a href="/like">
            <div className="navbar__heart">
              <img
                src="heart-icon.png"
                alt="Heart Icon"
                className="navbar__icon"
              />
              {getLikeItemsCount() !== 0 && (
                <span className="popup-item-number heart-popup desktop-item">
                  <span>{getLikeItemsCount()}</span>
                </span>
              )}
            </div>
          </a>

          <a href="/cart">
            <div className="navbar__cart">
              <img
                src="cart-icon.png"
                alt="Shopping Cart Icon"
                className="navbar__icon"
              />
              {getCartItemsCount() !== 0 && (
                <span className="popup-item-number desktop-item">
                  <span>{getCartItemsCount()}</span>
                </span>
              )}
            </div>
          </a>

          <div className="navbar__user-icon" onClick={toggleDropdown}>
            <img src="user-icon.png" alt="User Icon" className="navbar__icon" />{" "}
            {/* User Icon */}
          </div>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="navbar__dropdown">
            <ul>
              <li>
                <a className="eye-watch" href="/watchlist">
                  {" "}
                  <VscEye />
                  Watchlist
                </a>
              </li>
              <li>
                <FaCog /> Manage my account
              </li>
              <li>
                <FaListAlt /> My Orders
              </li>
              <li>
                <FaRegWindowClose /> My Cancellations
              </li>
              <li>
                <FaStar /> My Reviews
              </li>
              <li>
                <FaSignOutAlt /> Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
