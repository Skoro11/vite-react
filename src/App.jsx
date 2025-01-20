/* import "./styles/Navbar.css"; */
/* import ProductButton from "./components/ProductFunctions.jsx"; */
import Navbar from "./sections/Navbar";
/* import HeroSection from "./sections/Hero"; */
import Carousel from "./sections/Carousel";
import { CartProvider } from "./context/Context";
import MobileLinks from "./sections/MobileLinks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        {/* Routes replaces Switch in React Router v6 */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel />
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

          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
        <MobileLinks />{" "}
      </CartProvider>
    </Router>
  );
}
export default App;
