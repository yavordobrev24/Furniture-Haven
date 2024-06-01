import { useState } from "react";
import styles from "./AddProduct.module.css";
import { createProduct } from "../../services/furnitureService";
import { useNavigate, useParams } from "react-router-dom";

export default function AddProduct(props) {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    imageUrl: "",
    description: "",
    category: "kitchen",
    price: "0.01",
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
    navigate("/");
    setProductData({
      name: "",
      imageUrl: "",
      description: "",
      category: "kitchen",
      price: "",
    });
  };

  return (
    <div className={styles["add-product"]}>
      <div className={styles.form}>
        <h3>Add Product</h3>
        <form onSubmit={onSubmit}>
          <div className={styles.input}>
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              id="productName"
              name="name"
              value={productData.name}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="description">Description</label>
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
          <div className={styles.input}>
            <label htmlFor="category">Category</label>
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
          <div className={styles.input}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={productData.price}
              onChange={onChangeHandler}
              min={0.01}
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
