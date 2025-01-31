import { useState, useEffect, useRef } from "react";
import { products as initialProducts } from "../components/Products";
import "./Admin.css";

function AdminPanel() {
  const [products, setProducts] = useState(initialProducts);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    image: "",
    price: "",
    discountedPrice: "",
    category: "",
    subcategory: "",
    description: "",
    stars: "",
    slug: "",
  });

  const [searchQuery, setSearchQuery] = useState({
    name: "",
    id: "",
    minPrice: "",
    maxPrice: "",
    category: "",
    subcategory: "",
  });

  const [activeSearchColumn, setActiveSearchColumn] = useState(null);
  const dropdownRef = useRef(null); // Ref for the dropdown container

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveSearchColumn(null); // Close dropdown if click outside
      }
    };

    // Event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleColumnClick = (column) => {
    setActiveSearchColumn(
      (prevColumn) => (prevColumn === column ? null : column) // Close if clicking the same column
    );
  };

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery({ ...searchQuery, [name]: value });
  };

  const filteredProducts = products.filter((product) => {
    let match = true;

    if (searchQuery.id && !product.id.toString().includes(searchQuery.id)) {
      match = false;
    }

    if (
      searchQuery.name &&
      !product.name.toLowerCase().includes(searchQuery.name.toLowerCase())
    ) {
      match = false;
    }

    if (
      searchQuery.category &&
      !product.category
        .toLowerCase()
        .includes(searchQuery.category.toLowerCase())
    ) {
      match = false;
    }

    if (
      searchQuery.subcategory &&
      !product.subcategory
        .toLowerCase()
        .includes(searchQuery.subcategory.toLowerCase())
    ) {
      match = false;
    }

    if (
      searchQuery.minPrice &&
      parseFloat(product.price.replace("$", "")) <
        parseFloat(searchQuery.minPrice)
    ) {
      match = false;
    }

    if (
      searchQuery.maxPrice &&
      parseFloat(product.price.replace("$", "")) >
        parseFloat(searchQuery.maxPrice)
    ) {
      match = false;
    }

    return match;
  });

  const categories = ["Electronics", "Clothing", "Books", "Furniture"]; // Example categories
  const subcategories = ["Mobile", "Laptop", "Shirt", "Sofa"]; // Example subcategories

  return (
    <div className="admin-panel">
      <h2>Admin Panel - Product Management</h2>

      <div className="flex-container">
        {/* Product Table */}
        <table className="admin-table">
          <thead>
            <tr>
              <th onClick={() => handleColumnClick("id")}>
                ID
                {activeSearchColumn === "id" && (
                  <div className="dropdown" ref={dropdownRef}>
                    <input
                      type="text"
                      name="id"
                      placeholder="Search by ID"
                      value={searchQuery.id}
                      onChange={handleSearchChange}
                    />
                  </div>
                )}
              </th>
              <th onClick={() => handleColumnClick("name")}>
                Name
                {activeSearchColumn === "name" && (
                  <div className="dropdown" ref={dropdownRef}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Search by Name"
                      value={searchQuery.name}
                      onChange={handleSearchChange}
                    />
                  </div>
                )}
              </th>
              <th onClick={() => handleColumnClick("price")}>
                Price
                {activeSearchColumn === "price" && (
                  <div className="dropdown" ref={dropdownRef}>
                    <input
                      type="number"
                      name="minPrice"
                      placeholder="Min Price"
                      value={searchQuery.minPrice}
                      onChange={handleSearchChange}
                    />
                    <input
                      type="number"
                      name="maxPrice"
                      placeholder="Max Price"
                      value={searchQuery.maxPrice}
                      onChange={handleSearchChange}
                    />
                  </div>
                )}
              </th>
              <th onClick={() => handleColumnClick("category")}>
                Category
                {activeSearchColumn === "category" && (
                  <div className="dropdown" ref={dropdownRef}>
                    <select
                      name="category"
                      value={searchQuery.category}
                      onChange={handleSearchChange}
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat, index) => (
                        <option key={index} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </th>
              <th onClick={() => handleColumnClick("subcategory")}>
                Subcategory
                {activeSearchColumn === "subcategory" && (
                  <div className="dropdown" ref={dropdownRef}>
                    <select
                      name="subcategory"
                      value={searchQuery.subcategory}
                      onChange={handleSearchChange}
                    >
                      <option value="">Select a subcategory</option>
                      {subcategories.map((subcat, index) => (
                        <option key={index} value={subcat}>
                          {subcat}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
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
