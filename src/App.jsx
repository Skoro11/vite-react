/* import "./styles/Navbar.css"; */
/* import ProductButton from "./components/ProductFunctions.jsx"; */
import Navbar from "./sections/Navbar";
/* import HeroSection from "./sections/Hero"; */
import Carousel from "./sections/Carousel";
import { CartProvider } from "./context/ContextCart";
import MobileLinks from "./sections/MobileLinks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import { LikeProvider } from "./context/ContextLike";
import LikePage from "./pages/LikePage";
import { WatchlistProvider } from "./context/ContextWatchlist";
import WatchlistPage from "./pages/WatchlistPage";
function App() {
  return (
    <Router>
      <CartProvider>
        <LikeProvider>
          <WatchlistProvider>
            <Navbar />
            {/* Routes replaces Switch in React Router v6 */}
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* <HeroSection /> */}
                    <Carousel />
                  </>
                }
              />
              <Route
                path="/like"
                element={
                  <>
                    <LikePage />
                    <WatchlistPage />
                  </>
                }
              />
              <Route
                path="/cart"
                element={
                  <>
                    <CartPage />
                  </>
                }
              />
              <Route path="/watchlist" element={<></>} />
              <Route path="*" element={<h2>404 - Page Not Found</h2>} />
            </Routes>
            <MobileLinks />{" "}
          </WatchlistProvider>
        </LikeProvider>
      </CartProvider>
    </Router>
  );
}
export default App;
