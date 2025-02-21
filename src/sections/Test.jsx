// Test.jsx
import { useState, useEffect } from 'react';
import { products } from '../components/Products'; // Correctly import fetchData

function Test() {
  const [productsObject, setProductsObject] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchData(); // Get the productsObject from fetchData
        setProductsObject(data); // Set it in the state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts(); // Trigger data fetching
  }, []); // Empty dependency array to only run once when the component mounts

  return (
    <div>
      <h1>Flash Sale Products</h1>
      <ul>
        {products.map((productName) => {
          const product = productsObject[productName];  // Access product by name
          return (
            <li key={productName}>
              <h3>{productName}</h3> 
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <p>Discounted Price: {product.discountedPrice}</p>
              <img src={product.image} alt={productName} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Test;
