// ProductTest.jsx
import axios from 'axios';

let products = [];
let flashSaleProducts = [];
let BestSellingProducts = [];
let ExploreProducts = [];

// Function to fetch and filter products
const fetchAndFilterProducts = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
    products = response.data.map(product => ({
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
    flashSaleProducts = products.filter(
      (product) => product.specialCategory === "Flash Sales"
    );
    BestSellingProducts = products.filter(
      (product) => product.specialCategory === "Best Selling"
    );
    ExploreProducts = products.filter(
      (product) => product.specialCategory === "Explore"
    );
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Fetch data before exporting
await fetchAndFilterProducts();

export { products, flashSaleProducts, BestSellingProducts, ExploreProducts };
