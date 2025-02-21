// ProductTest.jsx
import axios from 'axios';

// Function to fetch and filter products
export const fetchData = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
    const products = response.data.map(product => ({
      id: product.id,
      slug: product.slug,
      image: product.image,
      stars: product.stars,
      name: product.name,
      price: product.price,
      numOfReviews: product.numOfReviews,
      tag: product.tag,
      discountedPrice: product.discountedPrice,
      description: product.description,
      category: product.category,
      specialCategory: product.specialCategory,
    }));

    // Immediately filter the products based on specialCategory
    const flashSaleProducts = products.filter(
      (product) => product.specialCategory === "Flash Sales"
    );
    const BestSellingProducts = products.filter(
      (product) => product.specialCategory === "Best Selling"
    );
    const ExploreProducts = products.filter(
      (product) => product.specialCategory === "Explore"
    );

    // Return all products along with the filtered arrays
    return { products, flashSaleProducts, BestSellingProducts, ExploreProducts };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { products: [], flashSaleProducts: [], BestSellingProducts: [], ExploreProducts: [] };
  }
};

// Pre-fetch products and immediately filter them
export let products = [];
export let flashSaleProducts = [];
export let BestSellingProducts = [];
export let ExploreProducts = [];

(async () => {
  const data = await fetchData();
  products = data.products;
  flashSaleProducts = data.flashSaleProducts;
  BestSellingProducts = data.BestSellingProducts;
  ExploreProducts = data.ExploreProducts;
})();
