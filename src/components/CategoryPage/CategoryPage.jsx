import { useEffect, useState } from "react";
import styles from "./CategoryPage.module.css";
import ProductList from "../ProductList/ProductList";
import { useNavigate, useParams } from "react-router-dom";

const categories = [
  {
    text: "All",
    url: "all",
  },
  { text: "Kitchen", url: "kitchen" },
  { text: "Living room", url: "living-room" },
  { text: "Bedroom", url: "bedroom" },
];
export default function CategoryPage(props) {
  const params = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(params.category || "all");

  useEffect(() => {
    if (params.category !== category) {
      navigate(`/categories/${category}`);
    }
  }, [category, params.category, navigate]);

  const changeCategory = (category) => {
    setCategory(category.toLowerCase());
  };

  return (
    <>
      <div className={styles.categories}>
        {categories.map((cat) => (
          <button
            key={cat.text}
            className={`${styles["category-card"]} ${
              cat.url === category ? styles.active : ""
            }`}
            onClick={() => changeCategory(cat.url)}
          >
            {cat.text}
          </button>
        ))}
      </div>
      <ProductList category={category} />
    </>
  );
}
