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
import CategorySection from "./sections/CategorySection";
import CarouselExplore from "./sections/CarouselExplore";
import Banner from "./sections/Banner";
import NewArrival from "./sections/NewArrival";
import NotFound from "./pages/NotFound";
import AdminPanel from "./admin/AdminPanel";
import ContactPage from "./pages/Contact"
<<<<<<< HEAD
import AboutPage from "./pages/About";
=======
import AboutPage from "./pages/AboutPage";
>>>>>>> 4dc31c66fca44460e2f866d6fe13e17655feccf4
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
                    {/* <AdminPanel /> */}
                    <HeroSection />
                    <Carousel />

                    <CategorySection />
                    <CarouselBestSelling />
                    <Banner />

                    <CarouselExplore />

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
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route
                path="/cart"
                element={
                 
                    <CartPage />
                 
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
            <MobileLinks /> <Footer />
          </WatchlistProvider>
        </LikeProvider>
      </CartProvider>
    </Router>
  );
}
export default App;
