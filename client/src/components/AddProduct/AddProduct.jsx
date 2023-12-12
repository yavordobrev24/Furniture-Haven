import React, { useState } from "react";
import "./AddProduct.css";
import { createProduct } from "../../services/furnitureService";
import { useNavigate } from "react-router-dom";

export default function AddProduct(props) {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    imageUrl: "",
    description: "",
    category: "kitchen",
    price: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Product Data:", productData);

    await createProduct(productData);
    navigate("/products");
    setProductData({
      name: "",
      imageUrl: "",
      description: "",
      category: "kitchen",
      price: "",
    });
  };

  return (
    <div className="add-product-page">
      <div className="add-product-form">
        <h2>Add a New Product</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="productName">Product Name:</label>
            <input
              type="text"
              id="productName"
              name="name"
              value={productData.name}
              onChange={onChangeHandler}
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
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={productData.description}
              onChange={onChangeHandler}
              rows="3"
              maxLength="60"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={productData.category}
              onChange={onChangeHandler}
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
              onChange={onChangeHandler}
              step="0.01"
              required
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
}
