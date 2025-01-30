import Navbar from "./sections/Navbar";
import "./App.css";
import HeroSection from "./sections/Hero";
import Carousel from "./sections/Carousel";
import { CartProvider } from "./context/ContextCart";
import MobileLinks from "./sections/MobileLinks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import { LikeProvider } from "./context/ContextLike";
import LikePage from "./pages/LikePage";
import { WatchlistProvider } from "./context/ContextWatchlist";
import WatchlistPage from "./pages/WatchlistPage";
import Footer from "./sections/Footer";
import ProductUrl from "./pages/ProductUrl";
import CarouselBestSelling from "./sections/CarouselBestSelling";
import CategorySectiion from "./sections/CategorySection";
import CarouselExplore from "./sections/CarouselExplore";
import Banner from "./sections/Banner";
import NewArrival from "./sections/NewArrival";
function App() {
  return (
    <Router>
      <CartProvider>
        <LikeProvider>
          <WatchlistProvider>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* <HeroSection />
                    <Carousel />
                    <CarouselBestSelling />
                    <CategorySectiion /> */}
                    {/* <CarouselExplore /> */}
                    {/* <Banner /> */}
                    <NewArrival />
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
              <Route path="/product/:slug/:id" element={<ProductUrl />} />

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
            <MobileLinks /> {/* <Footer /> */}
          </WatchlistProvider>
        </LikeProvider>
      </CartProvider>
    </Router>
  );
}
export default App;
