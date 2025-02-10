import { useState } from "react";
import { products } from "../components/Products";
import "./Admin.css";

function AdminPanel() {
  const [toggle, setToggle] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchSubcategory, setSearchSubcategory] = useState("");

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchName.toLowerCase()) &&
      (searchPrice === "" || product.price.toString().includes(searchPrice)) &&
      product.category.toLowerCase().includes(searchCategory.toLowerCase()) &&
      product.specialCategory
        .toLowerCase()
        .includes(searchSubcategory.toLowerCase())
    );
  });

  return (
    <div className="admin-panel">
      <h2>Admin Panel - Product Management</h2>

      {/* Search Fields */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        className="search-bar"
      />
      <input
        type="text"
        placeholder="Search by price..."
        value={searchPrice}
        onChange={(e) => setSearchPrice(e.target.value)}
        className="search-bar"
      />
      <input
        type="text"
        placeholder="Search by category..."
        value={searchCategory}
        onChange={(e) => setSearchCategory(e.target.value)}
        className="search-bar"
      />
      <input
        type="text"
        placeholder="Search by subcategory..."
        value={searchSubcategory}
        onChange={(e) => setSearchSubcategory(e.target.value)}
        className="search-bar"
      />

      <div className="flex-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Subcategory</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td className="image-row">
                  <img
                    src={product.image}
                    className="image-product-row"
                    alt={product.name}
                  />
                  {product.name}
                </td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.subcategory}</td>
                <td>
                  <button className="edit-btn-admin">Edit</button>
                  <button className="delete-btn-admin">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPanel;
