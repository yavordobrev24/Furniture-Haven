import { useEffect, useState } from "react";
import styles from "./EditProduct.module.css";
import { getSingleProduct, updateProduct } from "../../services/productService";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [productData, setProductData] = useState({
    name: "",
    image_url: "",
    description: "",
    category: "kitchen",
    price: "",
  });
  const getProduct = async (id) => {
    const data = await getSingleProduct(id);
    setProductData(data);
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
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="image_url">Image URL</label>
            <input
              type="text"
              id="image_url"
              name="image_url"
              value={productData.image_url}
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
