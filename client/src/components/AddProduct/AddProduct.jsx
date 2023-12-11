// AddProduct.jsx

import React, { useState } from "react";
import "./AddProduct.css";

export default function AddProduct(props) {
  const [productData, setProductData] = useState({
    name: "",
    imageUrl: "",
    description: "",
    category: "kitchen",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions here with the submitted productData
    console.log("Product Data:", productData);
    // For example: props.addProduct(productData); // Assuming you have a function to add a product
    // Reset form fields
    setProductData({
      name: "",
      imageUrl: "",
      description: "",
      category: "Kitchen",
      price: "",
    });
  };

  return (
    <div className="add-product-form">
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={productData.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            rows="3"
            maxlength="60"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={productData.category}
            onChange={handleChange}
            required
          >
            <option value="kitchen">Kitchen</option>
            <option value="living-room">Living Room</option>
            <option value="bedroom">Bedroom</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
