import { useEffect, useState } from "react";
import styles from "./EditProduct.module.css";
import {
  getSingleProduct,
  updateProduct,
} from "../../services/furnitureService";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [productData, setProductData] = useState({
    name: "",
    imageUrl: "",
    description: "",
    category: "kitchen",
    price: "",
  });
  const getProduct = async (id) => {
    const result = await getSingleProduct(id);
    setProductData(result);
  };
  useEffect(() => {
    getProduct(id);
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, productData);
    navigate(`/product/${id}`);
  };

  return (
    <div className={styles["edit-product"]}>
      <div className={styles.form}>
        <h3>Edit Product</h3>
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
              disabled
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
              disabled
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
              disabled
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
              step="0.01"
              required
            />
          </div>
          <button type="submit">Edit Product</button>
        </form>
      </div>
    </div>
  );
}
