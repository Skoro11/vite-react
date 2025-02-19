// ProductTest.jsx
import axios from 'axios';

// Function to fetch and filter products
export const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/products');
    return response.data.map(product => ({
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
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

// Pre-fetch products and export them
export let products = [];

(async () => {
  products = await fetchData();
})();
